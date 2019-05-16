import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableData from '../../HOC/TableData';
import Statistic from './Statistic';
import { getPostsOverview } from '../../actions/post.action';
import { countUser, countMoney } from '../../actions/statistic.action';
class Exchange extends Component {
  static propTypes = {
    getPostsOverview: PropTypes.func.isRequired,
    countUser: PropTypes.func.isRequired,
    countMoney: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      posts: {},
      statistic: {}
    };
  }
  async componentDidMount() {
    this.props.getPostsOverview();
    this.props.countUser();
    this.props.countMoney();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.post && nextProps.post.posts) {
      this.setState({ posts: nextProps.post.posts });
    }
    if (nextProps.statistic) {
      this.setState({ statistic: nextProps.statistic });
    }
  }
  render() {
    const { posts, statistic } = this.state;
    return (
      <div className="container py-5">
        <Statistic statistic={statistic} />
        <TableData
          posts={posts}
          title="DANH SÁCH ĐƠN XIN VAY MỚI TRÊN TOÀN HỆ THỐNG"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  statistic: state.statistic
});

const mapDispatchToProps = {
  getPostsOverview,
  countUser,
  countMoney
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exchange);
