// import cn from 'classnames';
import { UserFilter } from '../UserFilter/UserFilter';
import { SearchFieldFilter } from '../SearchFieldFilter/SearchFieldFilter';

export const Filters = ({ userFilter,
  setUserFilter,
  searchFieldQuery,
  setSearchFieldQuery,
  categoryFilterArray,
  setCategoryFilterArray }) => (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <UserFilter userFilter={userFilter} setUserFilter={setUserFilter} />

      <SearchFieldFilter
        searchFieldQuery={searchFieldQuery}
        setSearchFieldQuery={setSearchFieldQuery}
      />

      <div className="panel-block is-flex-wrap-wrap">
        <a
          href="#/"
          data-cy="AllCategories"
          className="button is-success mr-6 is-outlined"
        >
          All
        </a>

        <a
          data-cy="Category"
          className="button mr-2 my-1 is-info"
          href="#/"
        >
          Category 1
        </a>

        <a
          data-cy="Category"
          className="button mr-2 my-1"
          href="#/"
        >
          Category 2
        </a>

        <a
          data-cy="Category"
          className="button mr-2 my-1 is-info"
          href="#/"
        >
          Category 3
        </a>
        <a
          data-cy="Category"
          className="button mr-2 my-1"
          href="#/"
        >
          Category 4
        </a>
      </div>

      <div className="panel-block">
        <a
          data-cy="ResetAllButton"
          href="#/"
          className="button is-link is-outlined is-fullwidth"
          onClick={() => {
            setUserFilter('');
            setSearchFieldQuery('');
            setCategoryFilterArray([]);
          }
          }
        >
          Reset all filters
        </a>
      </div>
    </nav>
);
