function shuffleBooks(books) {
    if (books === null || books === undefined) {
        return;
    }
    const result = books.shuffle();
    return result;
}

shuffleBooks();