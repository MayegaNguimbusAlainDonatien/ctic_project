import React from 'react';
import ListHeader from './ListHeader';
import BoardCard from './BoardCard';
import AddCardButton from './AddCardButton';
import PropTypes from 'prop-types';
import AppScrollbar from '@crema/core/AppScrollbar';

const List = ({list, onEditCardDetail, onClickAddCard, boardId}) => {
  return (
    <div key={list.id} className='d-flex flex-column p-2'>
      <ListHeader list={list} boardId={boardId} />

      <AppScrollbar className='scroll-scrum-item'>
        {list.cards && list.cards.length > 0 ? (
          <>
            {list.cards.map((card) => {
              return (
                <BoardCard
                  key={card.id}
                  card={card}
                  onEditCardDetail={onEditCardDetail}
                  list={list}
                />
              );
            })}
          </>
        ) : null}
      </AppScrollbar>

      <AddCardButton onClickAddCard={onClickAddCard} list={list} />
    </div>
  );
};

export default List;

List.propTypes = {
  onEditCardDetail: PropTypes.func,
  list: PropTypes.object.isRequired,
  onClickAddCard: PropTypes.func,
  boardId: PropTypes.number.isRequired,
};
