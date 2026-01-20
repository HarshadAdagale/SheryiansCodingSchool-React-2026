import RightCardContent from "./RightCardContent.jsx";

function RightCard(props) {
    return (
        <>
        <div className="h-full w-80 overflow-hidden relative rounded-4xl shrink-0">
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardContent color={props.color} id={props.id} tag={props.tag}/>
        </div>
        </>
    );
}

export default RightCard;