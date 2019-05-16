import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableData from '../../HOC/TableData';
import Statistic from './Statistic';
import { getPostsOverview } from '../../actions/post.action';
class Exchange extends Component {
  static propTypes = {
    getPostsOverview: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      posts: {}
    };
  }
  componentDidMount() {
    this.props.getPostsOverview();
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
        <Statistic />
        <TableData posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = {
  getPostsOverview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exchange);
