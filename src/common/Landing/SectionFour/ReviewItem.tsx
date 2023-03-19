import React from "react";

export const ReviewItem: React.FC<Props> = ({ text, image, author, position }) => {

    return (

        <div

            className="review-item"

        >

            <p> {text} </p>

            <div className="review-item-flex">

                <img

                    src={image}

                    alt={"review-item"}

                />

                <div className="review-item-flex-texts">

                    <h2> {author} </h2>

                    <small> {position} </small>

                </div>

            </div>

        </div>

    );

}

interface Props {

    text: string,

    image: string,

    author: string,

    position: string

}
