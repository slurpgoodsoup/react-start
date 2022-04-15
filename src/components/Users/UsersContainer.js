import { connect } from "react-redux";
import {
  followToggleUser,
  showMore,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../api/API";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          usersData={this.props.usersData}
          followToggleUser={this.props.followToggleUser}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  followToggleUser,
  showMore,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress
})(UsersContainer);
