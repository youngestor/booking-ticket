import axios from 'axios'
import { URL } from '../utils'

export default axios.create({
    baseURL: URL.SERVER
})