import RightCard from "./RightCard.jsx";

const RightContent = (props) => {
    return (
        <div id="right" className="h-full flex overflow-x-auto flex-nowrap gap-10 rounded-4xl p-6 w-2/3">
            {props.users.map(function(user, index){
                return <RightCard key={index } color={user.color} id={index} img={user.img} tag={user.tag}/>
            })}
        </div>
    )
}
export default RightContent