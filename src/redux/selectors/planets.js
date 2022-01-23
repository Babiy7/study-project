export const planetsSelector = ({ planets: { data, loading, error } }) => ({ planetsData: data, planetsLoading: loading, planetsError: error });
export const planetsDataSelector = ({ planets: { data } }) => data;
export const planetsLoadingSelector = ({ planets: { loading } }) => loading;
export const planetsErrorSelector = ({ planets: { error } }) => error;
