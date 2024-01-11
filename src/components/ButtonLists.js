
const ButtonLists = () => {

    const buttonCat = ["All", "Sports", "Entertainment", "Live", "Music", "Movies", "Podcast", "News", "Lofi", "Volleyball", "Cricket", "Latest", "Featured", "Events", "Gadgets", "Media", "Top News", "Recently Uploaded"]

    return (
        <div>

            {buttonCat.map((butt) => <button key={butt} className="bg-[#272727] text-white rounded-md px-3 py-1 mx-1">{butt}</button>)}
        </div>
    )
};

export default ButtonLists