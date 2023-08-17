import Tags from "./Tags";

import Card from 'react-bootstrap/Card';

const MyCard = ({name, description, thumbnail, tag}) => {
    return (
        <section className="MyCard">
            <Card>
                <Card.Img variant="top" src={thumbnail} />

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>

                    <Tags text={tag.text} color={tag.color} />
                </Card.Body>
            </Card>
        </section>
    );
}

export default MyCard;
