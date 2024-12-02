export class BookRepository {
  private pool: Pool = pool;

  async getFilteredBooks(
    offset: number,
    limit: number,
    author?: string,
    minPrice?: number,
    maxPrice?: number
  ): Promise<Book[]> {
    let query = 'SELECT * FROM books WHERE 1=1';
    const params: any[] = [];

    if (author) {
      params.push(author);
      query += ` AND author = $${params.length}`;
    }

    if (minPrice !== undefined) {
      params.push(minPrice);
      query += ` AND price >= $${params.length}`;
    }

    if (maxPrice !== undefined) {
      params.push(maxPrice);
      query += ` AND price <= $${params.length}`;
    }

    params.push(limit, offset);
    query += ` LIMIT $${params.length - 1} OFFSET $${params.length}`;

    const { rows } = await this.pool.query(query, params);
    return rows;
  }
}
