import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TokenCard from 'components/Card/TokenCard';
import fetchTokenAction from '../../services/fetchToken';
import {
  getTokenData,
  getTokenPending,
  getTokenError
} from '../../reducers/coindeskApiReducer';

class TokensPage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchToken } = this.props;
    fetchToken();
  }

  render() {
    const { tokenData, pending } = this.props;
    if (pending) {
      return <div data-uk-spinner />;
    }
    return (
      <TokenCard {...tokenData} />
    );
  }
}

TokensPage.propTypes = {
  tokenData: PropTypes.shape({
    code: PropTypes.string,
    description: PropTypes.string,
    rate: PropTypes.string,
    rate_float: PropTypes.number,
    symbol: PropTypes.string
  }).isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  error: getTokenError(state.token),
  tokenData: getTokenData(state.token),
  pending: getTokenPending(state.token)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchToken: fetchTokenAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokensPage);
