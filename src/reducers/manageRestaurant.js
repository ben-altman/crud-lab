import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {

    switch (action.type) {

        case 'ADD_RESTAURANT':
            // console.log({ restaurants: state.restaurants.concat(action.text) });
            const restaurant = { text: action.text, id: cuid() }
            // concat returns a new array
            // return { restaurants: state.restaurants.concat(restaurant)} ;
            return {...state, restaurants: [...state.restaurants.concat([restaurant])]};

        case 'DELETE_RESTAURANT':
            // console.log(action)
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return { ...state, restaurants}

        case 'ADD_REVIEW':
            // console.log({ restaurants: state.restaurants.concat(action.text) });
            const review = { text: action.text.text, restaurantId: action.text.restaurantId, id: cuid() }
            // concat returns a new array
            // return { restaurants: state.restaurants.concat(restaurant)} ;
            return {...state, reviews: [...state.reviews.concat([review])]};

        case 'DELETE_REVIEW':
            // debugger;
            const reviews = state.reviews.filter(review => review.id !== action.id)
            return { ...state, reviews}

        default:
            return state;
    }
}


