/**
 * 请求后端接口数据
 */
import axios from '@/libs/api.request';

// 保存后的会议列表
export const getListQueryAllStaffSeat = (meetingId) => {
  return axios.request({
    url: '/staff/list_query_all_staff_seat?meetingId=' + meetingId,
    method: 'get'
  });
};

// 查询模板列表（分页）
export const getListTemplate = (data) => {
  return axios.request({
    url: '/templates/list_template',
    method: 'get',
    params: data
  });
};