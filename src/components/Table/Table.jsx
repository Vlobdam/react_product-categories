import cn from 'classnames';

export const Table = ({ products }) => (
  <div className="box table-container">
    {products.length === 0 ? (
      <p data-cy="NoMatchingMessage">
        No products matching selected criteria
      </p>
    ) : (
      <table
        data-cy="ProductTable"
        className="table is-striped is-narrow is-fullwidth"
      >
        <thead>
          <tr>
            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                ID

                <a href="#/">
                  <span className="icon">
                    <i data-cy="SortIcon" className="fas fa-sort" />
                  </span>
                </a>
              </span>
            </th>

            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                Product

                <a href="#/">
                  <span className="icon">
                    <i data-cy="SortIcon" className="fas fa-sort-down" />
                  </span>
                </a>
              </span>
            </th>

            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                Category

                <a href="#/">
                  <span className="icon">
                    <i data-cy="SortIcon" className="fas fa-sort-up" />
                  </span>
                </a>
              </span>
            </th>

            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                User

                <a href="#/">
                  <span className="icon">
                    <i data-cy="SortIcon" className="fas fa-sort" />
                  </span>
                </a>
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            const {
              id,
              category,
              name,
              user,
            } = product;

            return (
              <tr key={id} data-cy="Product">
                <td className="has-text-weight-bold" data-cy="ProductId">
                  {id}
                </td>

                <td data-cy="ProductName">{name}</td>
                <td data-cy="ProductCategory">{`${category.icon} - ${category.title}`}</td>

                <td
                  data-cy="ProductUser"
                  className={cn({
                    'has-text-link': user.sex === 'm',
                    'has-text-danger': user.sex === 'f',
                  })}
                >
                  {user.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    )
  }
  </div>
);
