const Reviews = ({ review }) => {
    
    return(
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
        <p className="text-gray-600">{review.content}</p>
        <p className="text-gray-500 mt-2">By {review.author} on {review.date}</p>
        </div>
    )
}

export default Reviews;