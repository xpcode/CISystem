const initialState = [{
    label: '首页',
    renderIcon: null,
    renderSelectedIcon: null,
    selected: true,
},{
    label: '关注',
    renderIcon: null,
    renderSelectedIcon: null,
    selected: false,
},{
    label: '发现',
    renderIcon: null,
    renderSelectedIcon: null,
    selected: false,
},{
    label: '我的',
    renderIcon: null,
    renderSelectedIcon: null,
    selected: false,
}]

const tabs = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default tabs