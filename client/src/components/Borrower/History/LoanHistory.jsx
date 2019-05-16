import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHistory from '../../../HOC/TableHistory';
import LoanStatistic from './LoanStatistic';
import { getOwnPosts } from '../../../actions/post.action';
class LoanHistory extends Component {
  static propTypes = {
    getOwnPosts: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      posts: {}
    };
  }

  componentDidMount() {
    this.props.getOwnPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.post && nextProps.post.posts) {
      this.setState({ posts: nextProps.post.posts });
    }
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="container py-5">
        <LoanStatistic posts={posts} />
        <TableHistory posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = { getOwnPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanHistory);
