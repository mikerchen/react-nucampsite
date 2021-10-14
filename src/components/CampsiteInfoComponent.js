import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
    }
    renderCampsite(campsite) {
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    renderComments(comments){
        if(comments) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {
                        comments.map(comment => {
                            return(
                                <div key={comment.id}>
                                    <p>{comment.text}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                            );
                        })
                    }
                </div>
            )
        }
        else {
            return <div/>;
        }
    }
    render() {
        const campsite = this.props.campsites;
        if(campsite) {
            return(
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(campsite)}
                        {this.renderComments(campsite.comments)}
                    </div>
                </div>
                )
            }
        else { 
            return <div/>;
        }
    }
}

export default CampsiteInfo