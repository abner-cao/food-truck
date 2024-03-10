import axios from 'axios';

export const getFoodTrucksData = () => axios.get('/api/csv/records');