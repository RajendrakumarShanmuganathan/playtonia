import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contentGetAction } from '../services/content/action';
import map from "lodash";
import Pagination from "react-js-pagination";

class ListOfDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Page: 1,
            perPage: 5,
        };
    }

    receivePagechange = (page) => {
        this.setState({ page });
    }


    componentDidMount() {
        this.props.contentGetAction();
        this.receivePagechange(1);
    }
    render() {
        const { listOfDetails } = this.props;
        const { page, perPage } = this.state;
        return (
            <div className="container mt-4">
                <div className="row">
                    {listOfDetails && listOfDetails.map((list, i) => page * perPage > i
                        && (page - 1) * perPage <= i
                        &&
                        <div className="col-md-4 col-lg-4 col-sm-6 col-12" key={i}>
                            <div className="cardBg">
                                <h2>{list.id}. {list.title}</h2>
                                <p>{list.body}</p>
                            </div>
                        </div>
                    )}

                </div>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={perPage}
                    totalItemsCount={listOfDetails && listOfDetails.length}
                    pageRangeDisplayed={5}
                    onChange={this.receivePagechange}
                />
            </div>
        )
    }
}
ListOfDetails.defaultProps = {
    listOfDetails: []
}
const mapStateToProps = state => ({
    listOfDetails: state.contentListReducer.contentList

});
const mapDispatchToProps = dispatch => ({
    contentGetAction: () => dispatch(contentGetAction()),

});
export default connect(mapStateToProps, mapDispatchToProps)(ListOfDetails);