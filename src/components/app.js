import React from 'react'; 
import SearchInput from './Searchinput';
import axios from 'axios'; 
import ImageList from './imageList'

class App extends React.Component {

	state = {images: [] }

	  onSearchSubmit = async (entry) => {
		const response = await axios.get(`https://pixabay.com/api/?key=19140629-aae3020f35e93d4634aca820d&q=${entry}&image_type=photo`)
		this.setState({images:response.data.hits})
	}

	render(){
	return(
		<div className = 'ui container' style= {{marginTop:'30px'}}>
			<SearchInput onSearchSubmit = {this.onSearchSubmit} />
			<ImageList images = {this.state.images} />
		</div>

		)
	}
}
export default App; 