import React from 'react';
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from '../../src';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

import { classnames } from './helpers';

class AutoCompleteAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            errorMessage: '',
            latitude: null,
            longitude: null,
            isGeocoding: false,
        };
    }

    handleChange = address => {
        this.setState({
            address,
            latitude: null,
            longitude: null,
            errorMessage: '',
        });
    };

    handleSelect = selected => {
        this.setState({ isGeocoding: true, address: selected });
        geocodeByAddress(selected)
            .then(res => getLatLng(res[0]))
            .then(({ lat, lng }) => {
                this.setState({
                    latitude: lat,
                    longitude: lng,
                    isGeocoding: false,
                });
            })
            .catch(error => {
                this.setState({ isGeocoding: false });
                console.log('error', error); // eslint-disable-line no-console
            });
    };

    handleCloseClick = () => {
        this.setState({
            address: '',
            latitude: null,
            longitude: null,
        });
    };

    handleError = (status, clearSuggestions) => {
        console.log('Error from Google Maps API', status); // eslint-disable-line no-console
        this.setState({ errorMessage: status }, () => {
            clearSuggestions();
        });
    };

    render() {
        const {
            address,
            errorMessage,
            latitude,
            longitude,
            isGeocoding,
        } = this.state;

        return (
            <div>
                <PlacesAutocomplete
                    onChange={this.handleChange}
                    value={address}
                    onSelect={this.handleSelect}
                    onError={this.handleError}
                    shouldFetchSuggestions={address.length > 2}>

                    {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                        return (
                            <div className="Demo__search-bar-container">
                                <div className="Demo__search-input-container">
                                    <input
                                        {...getInputProps({
                                            placeholder: 'Search Places...',
                                            className: 'Demo__search-input',
                                        })}
                                    />
                                </div>
                                {suggestions.length > 0 && (
                                    <div className="Demo__autocomplete-container">
                                        {suggestions.map(suggestion => {
                                            const className = classnames('Demo__suggestion-item', {
                                                'Demo__suggestion-item--active': suggestion.active,
                                            });

                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, { className })}
                                                >
                                                    <strong>
                                                        {suggestion.formattedSuggestion.mainText}
                                                    </strong>{' '}
                                                    <small>
                                                        {suggestion.formattedSuggestion.secondaryText}
                                                    </small>
                                                </div>
                                            );
                                            /* eslint-enable react/jsx-key */
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    }}
                </PlacesAutocomplete>
                {errorMessage.length > 0 && (
                    <div className="Demo__error-message">{this.state.errorMessage}</div>
                )}

            </div>
        );
    }
}

export default AutoCompleteAddress;