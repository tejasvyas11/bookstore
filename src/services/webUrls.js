const Server = "https://itstack-book-store-88111cd64392.herokuapp.com/"
export default {
    CUSTOMER_REGISTRATION : `${Server}/store/customer_reg` ,
    SELLER_REGISTRATION : `${Server}/store/seller_reg`,
    LOGIN_USER : `${Server}/store/login`,
    CATEGORY_LIST : `${Server}/store/list/category`,
    BOOK_LIST : `${Server}/store/list/books`,
    CATEGORY_SAVE : `${Server}/auth/category`,
    CATEGORY_UPDATE : `${Server}/auth/category/`,
    CHANGE_CATEGORY_STATUS : `${Server}/auth/category/`,
    BOOK_SAVE : `${Server}/auth/book`,
    CHANGE_BOOK_IMAGE : `${Server}/auth/book/changeimage/`,
    CHANGE_BOOK_STATUS : `${Server}/auth/book/` ,
    TRANS_TYPE_LIST : `${Server}/store/list/trans_types`

}