export const peopleSelector = ({ people: { data, loading, error } }) => ({ peopleData: data, peopleLoading: loading, peopleError: error });
export const peopleDataSelector = ({ people: { data } }) => data;
export const peopleLoadingSelector = ({ people: { loading } }) => loading;
export const peopleErrorSelector = ({ people: { error } }) => error;
