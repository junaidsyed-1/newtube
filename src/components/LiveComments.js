import Person4Icon from '@mui/icons-material/Person4';

const LiveComments = ({ name, comment }) => {
    return (
        <div className="flex items-center shadow-sm py-2">
            <span><Person4Icon /></span>
            <span className="ml-1">{name}:</span>
            <span className="ml-3">{comment}</span>
        </div>
    )
}

export default LiveComments;