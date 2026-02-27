import quotation from "../../../../assets/reviewQuote.png"
const ReviewCard = ({ review }) => {
    // console.log(review);
    return (
        <div className="p-8 bg-white rounded-3xl">
            <img src={quotation} alt="" />
            <div className="text-gray-500 my-6">{review.review}</div>
            <div className="flex gap-4">
                <img src={review.user_photoURL} className="rounded-full w-16" alt="" />
                <hr className="border-t-2 border-secondary" />
                <div className="flex flex-col">
                    <h3 className="font-bold text-lg">{review.userName}</h3>
                    <p className="">{review.user_email}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;