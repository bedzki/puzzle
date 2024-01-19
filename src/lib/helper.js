const getByTestId = (id, name, attr) => {
    return { [attr ? attr : "data-testid"]: name ? `${id}-${name}` : id };
};

export { getByTestId };
