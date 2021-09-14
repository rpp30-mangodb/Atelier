/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import './App.css';
import RnR from './RnR/RnR.jsx';
import '../fa-icons/fa-icons.js';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import OutfitProducts from './RelatedProducts/OutfitProducts.jsx';
import QuestionsNAnswersContainer from './QnA/Questions&AnswersContainer.jsx';
import ProductDetailContainer from './ProductDetail/productDetailContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 47425,
      displayProduct: {},
      displayStyle: {},
      didUpdate: false,
    };
    this.formatBody = this.formatBody.bind(this);
  }

  formatBody(method, apiRoute, params = {}, data = {}) {
    let bodyObj = {
      method: method,
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${apiRoute}`,
      data: data,
      params: params,
      headers: { Authorization: '' },
    };


    return bodyObj;
  }

  componentDidMount() {
    // eslint-disable-next-line quotes
    let body = this.formatBody('GET', `/products/${this.state.productId}`);
    axios
      .post('/api/*', body)
      .then((results) => {
        console.log('results', results);
        this.setState({ displayProduct: results.data[0], displayStyle: results.data[1], didUpdate: true });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.didUpdate && (
          <div>
            <ProductDetailContainer
              productId={this.state.productId}
              displayProduct={this.state.displayProduct}
              displayStyle={this.state.displayStyle}
            />

            <h3 className='related-prod'>
              Related products:
              <RelatedProducts relatedProd={this.state.displayProduct} />
            </h3>
            <h3 className='related-prod'>OutfitProducts:</h3>
            <OutfitProducts />

            <RnR />
            <QuestionsNAnswersContainer />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
