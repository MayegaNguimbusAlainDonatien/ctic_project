import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetWallData} from '../../../redux/actions';
import VideoCall from './VideoCall';
import FriendRequests from './FriendRequests';
import Photos from './Photos';
import RecentNews from './RecentNews';
import WhoToFollow from './WhoToFollow';
import Suggestions from './Suggestions';
import CreatePost from './CreatePost';
import PostsList from './PostsList';
import AppsContainer from '@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from './index.module.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Stories from './Stories';
import About from './About';
import WhatsHappen from './WhatsHappen';
import SuggestTeam from './SuggestTeam';
import clsx from 'clsx';

const Wall = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetWallData());
  }, [dispatch]);

  const {wallData} = useSelector(({wall}) => wall);
  const {messages} = useIntl();

  return (
    <AppsContainer
      title={messages['sidebar.apps.wall']}
      cardStyle={{backgroundColor: 'transparent', boxShadow: 'none'}}
      fullView>
      <AppPageMetadata title='Wall App' />
      {wallData && (
        <AppRowContainer style={{height: '100%'}}>
          <Col
            xs={12}
            md={6}
            lg={3}
            xl={3}
            xxl={3}
            className={clsx(styles.wallLeftSidebar, 'mb-0 h-100')}>
            <AppScrollbar className={styles.wallScrollbar}>
              <div>
                <VideoCall data={wallData.videoCall} />
                <About about={wallData.about} />
                <SuggestTeam data={wallData.suggestTeam} />
                <Photos photos={wallData.photos} />
                <Suggestions suggestions={wallData.suggestions} />
              </div>
            </AppScrollbar>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className={clsx(styles.wallMainContent, 'mb-0 h-100')}>
            <AppScrollbar className={styles.wallScrollbar}>
              <div>
                <CreatePost />
                <PostsList />
              </div>
            </AppScrollbar>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            xl={3}
            xxl={3}
            className={clsx(styles.wallRightSidebar, 'mb-0 h-100')}>
            <AppScrollbar className={styles.wallScrollbar}>
              <div>
                <Stories stories={wallData.stories} />
                <WhatsHappen whatsHappen={wallData.whatsHappen} />
                <WhoToFollow whoToFollow={wallData.whoToFollow} />
                <FriendRequests friendRequests={wallData.friendRequests} />
                <RecentNews recentNews={wallData.recentNews} />
              </div>
            </AppScrollbar>
          </Col>
        </AppRowContainer>
      )}
    </AppsContainer>
  );
};

export default Wall;
