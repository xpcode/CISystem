export const ACTION_SEARCH_BYNAME = 'ACTION_SEARCH_BYNAME'
export const action_get_companys = 'action_get_companys'
export const action_get_companys_byname = 'action_get_companys_byname'
export const action_get_companys_filter = 'action_get_companys_filter'

const searchByName = (error, companyList) => {
  return {
    type: ACTION_SEARCH_BYNAME,
    payload: companyList,
    error
  }
}

const timerId = null

export const fetchCompanysAsync = (company_name, startPage = 0, endPage = 20) => {
  const company_type = 'company'
  const URL_QUERY_COMPANYS = `http://115.28.15.22/smart/query/company?company_name=${company_name}&startPage=${startPage}&endPage=${endPage}&company_type=${company_type}`

  const _fetchCompanysAsync = dispatch => {
    fetch(URL_QUERY_COMPANYS)
      .then(response => {
        return response.json()
      })
      .then(responseData => {
        dispatch(searchByName(null, responseData.company))
      })
      .catch(function (error) {
        dispatch(searchByName(error))
      })
  }

  return dispatch => {
    clearTimeout(timerId)

    timerId = setTimeout(_fetchCompanysAsync.bind(this, dispatch), 300)
  }
}