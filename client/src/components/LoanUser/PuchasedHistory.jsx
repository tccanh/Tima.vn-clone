import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHistory from '../../HOC/TableHistory';
import { getPurchasedPosts } from '../../actions/post.action';
class PuchasedHistory extends Component {
  static propTypes = {
    getPurchasedPosts: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      posts: {}
    };
  }

  componentDidMount() {
    this.props.getPurchasedPosts();
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
        <TableHistory
          posts={posts}
          title="DANH SÁCH ĐƠN VAY ĐƯỢC CHUYỂN ĐẾN BẠN"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = { getPurchasedPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuchasedHistory);
