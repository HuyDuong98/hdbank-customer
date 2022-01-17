import { INotificationDto } from './dtos/INotificationDto'

export const getNotification = async (): Promise<INotificationDto> => {
  return mockData
}

const mockData: INotificationDto = [
  {
    title: 'Hồ sơ của bạn đã được xét duyệt',
    sub: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '2 giờ trước',
    notice: 'Thông báo',
    fileNumber: 'Hồ sơ HD00019',
    new: true,
    like: false,
    content: {
      rate: 2.9,
      comment: 21,
      description:
        ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      image: 'NotificationImage',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  },
  {
    title: 'Hồ sơ của bạn đã được xét duyệt',
    sub: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '2 giờ trước',
    notice: 'Thông báo',
    fileNumber: 'Hồ sơ HD00020',
    new: true,
    like: false,
    content: {
      rate: 2.9,
      comment: 21,
      description:
        ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      image: 'NotificationImage',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  },
  {
    title: 'Hồ sơ của bạn đã được xét duyệt',
    sub: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '2 giờ trước',
    notice: 'Thông báo',
    fileNumber: 'Hồ sơ HD00021',
    new: true,
    like: false,
    content: {
      rate: 2.9,
      comment: 21,
      description:
        ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      image: 'NotificationImage',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  },
  {
    title: 'Hồ sơ của bạn đã được xét duyệt',
    sub: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '2 giờ trước',
    notice: 'Thông báo',
    fileNumber: 'Hồ sơ HD00022',
    new: false,
    like: true,
    content: {
      rate: 2.9,
      comment: 21,
      description:
        ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      image: 'NotificationImage',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  },
  {
    title: 'Hồ sơ của bạn đã được xét duyệt',
    sub: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '2 giờ trước',
    notice: 'Thông báo',
    fileNumber: 'Hồ sơ HD00023',
    new: false,
    like: true,
    content: {
      rate: 2.9,
      comment: 21,
      description:
        ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      image: 'NotificationImage',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  },
]
