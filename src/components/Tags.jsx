import Badge from 'react-bootstrap/Badge';

const Tags = ({text, color}) => {
    return (
        <>
            <Badge bg="" style={{background: color}}>{text}</Badge>
        </>
    );
}

export default Tags;
