import React, {Component} from 'react';
import styles from './DataContent.module.less';
/*users.jsx*/
import NavigationBar from "../../../component/navigationBar";
import '../../data/dataStyles.css';
import Footer from "../../../component/footer";
import Prices from "../../../component/prices";
import arrowImage from "../../../img/data/arrow.png";
import dividerImage from "../../../img/data/divider.png"
import backgroundImage from "../../../img/homepage/contact-form.png";
import ReactDOM from "react";

import CategorySelector from "../../../component/CategorySelector";
import AreaTypeSelector from "../../../component/AreaTypeSelector";

class DataContent extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Data</div>
                <div className={styles.subTitle}>Advanced Access</div>
                <br/>
                <div className={styles.content}>Paragraph about your plan Duis aute irure dolor in reprehenderit in voluptate velit esse cillrum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupitdatat non proident, sunt in culpa qui officia deserunt mollit Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non prodent, 
                </div>

                <div>
                <br/>
                <section className="page-section bg-orange" id="walkspan-data-catelog"
                         style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover"}}>
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading-minor text-light">View our Data</h2>
                        </div>

                        <div className="row" id='data-filter'>
                            <div className="col-sm">
                                <label for="city">City</label>
                                <select className="form-control" id="city" type="text">
                                    <option>New York City</option>
                                    <option>Chicago</option>
                                </select>
                            </div>
                            <div className="col-sm">
                                <label for="category">Select Walkability Feature</label>
                                <CategorySelector/>
                            </div>
                            <div className="col-sm">
                                <label for="area-type">Select Type</label>
                                <AreaTypeSelector/>
                            </div>
                        </div>

                        <br/>
                        <div className="text-md-center">
                            <div className='data-found'>Data Found: <b>7,123,456</b></div>
                        </div>
                        <br/>

                    </div>

                </section>
                <div className={styles.showTable}></div>
            </div>


            </div>



        );
    }
}

export default DataContent;