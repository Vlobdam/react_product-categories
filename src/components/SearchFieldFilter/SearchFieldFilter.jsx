export const SearchFieldFilter = ({ searchFieldQuery,
  setSearchFieldQuery }) => (
    <div className="panel-block">
      <p className="control has-icons-left has-icons-right">
        <input
          data-cy="SearchField"
          type="text"
          className="input"
          placeholder="Search"
          value={searchFieldQuery}
          onChange={e => setSearchFieldQuery(e.target.value)}
        />

        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true" />
        </span>

        {searchFieldQuery && (
        <span className="icon is-right">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete"
            onClick={() => setSearchFieldQuery('')}
          />
        </span>
        )}
      </p>
    </div>
);
