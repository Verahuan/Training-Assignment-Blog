import React from 'react'
import Icon from '@ant-design/icons'

const messageSvg=()=>(
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13 3H3C2.17157 3 1.5 3.67157 1.5 4.5V11.5L1.50255 11.5881C1.54817 12.3755 2.20116 13 3 13H6.2925L7.64645 14.3536L7.69355 14.3951C7.8897 14.5477 8.17331 14.5338 8.35355 14.3536L9.707 13H13C13.8284 13 14.5 12.3284 14.5 11.5V4.5C14.5 3.67157 13.8284 3 13 3ZM3 4H13C13.2761 4 13.5 4.22386 13.5 4.5V11.5C13.5 11.7761 13.2761 12 13 12H9.5L9.43428 12.0043C9.32593 12.0187 9.22459 12.0683 9.14645 12.1464L8 13.2925L6.85355 12.1464C6.75979 12.0527 6.63261 12 6.5 12H3C2.72386 12 2.5 11.7761 2.5 11.5V4.5C2.5 4.22386 2.72386 4 3 4ZM8.7924 8C8.7924 7.72386 8.56854 7.5 8.2924 7.5H7.70833L7.65002 7.50336C7.40135 7.53225 7.20833 7.74358 7.20833 8C7.20833 8.27614 7.43219 8.5 7.70833 8.5H8.2924L8.35071 8.49664C8.59938 8.46775 8.7924 8.25642 8.7924 8ZM11.2083 7.5C11.4845 7.5 11.7083 7.72386 11.7083 8C11.7083 8.25642 11.5153 8.46775 11.2666 8.49664L11.2083 8.5H10.6253C10.3492 8.5 10.1253 8.27614 10.1253 8C10.1253 7.74358 10.3183 7.53225 10.567 7.50336L10.6253 7.5H11.2083ZM5.87497 8C5.87497 7.72386 5.65111 7.5 5.37497 7.5H4.79196L4.73365 7.50336C4.48498 7.53225 4.29196 7.74358 4.29196 8C4.29196 8.27614 4.51582 8.5 4.79196 8.5H5.37497L5.43328 8.49664C5.68195 8.46775 5.87497 8.25642 5.87497 8Z" fill="#BFBFBF"/>
  </svg>
)
const ReadingSvg=()=>(
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.49637 13.4073L7.5 13.5C7.5 14.1437 8.43222 14.1659 8.49651 13.5666C8.49881 13.5452 8.5 13.523 8.5 13.5C8.5 13.1895 8.62197 12.8921 8.83859 12.6733C9.05426 12.4554 9.34604 12.3333 9.65 12.3333H13.5C13.7761 12.3333 14 12.1095 14 11.8333V3.5C14 3.22386 13.7761 3 13.5 3H10.2C9.48284 3 8.7954 3.28763 8.28904 3.7991C8.18268 3.90654 8.08614 4.022 8 4.14407C7.91386 4.022 7.81732 3.90654 7.71096 3.7991C7.2046 3.28763 6.51716 3 5.80001 3H2.5C2.22386 3 2 3.22386 2 3.5V11.8333C2 12.1095 2.22386 12.3333 2.5 12.3333H6.35C6.65396 12.3333 6.94574 12.4554 7.16137 12.6732C7.35636 12.8702 7.47466 13.1308 7.49637 13.4073ZM8.5 5.72222V11.669L8.62285 11.5966C8.90001 11.4447 9.20888 11.3551 9.52799 11.3368L9.65 11.3333L13 11.333V4H10.2C9.75018 4 9.31851 4.18062 8.99969 4.50265C8.67992 4.82564 8.5 5.26441 8.5 5.72222ZM7.5 11.6695V5.72222C7.5 5.30256 7.34881 4.8989 7.07731 4.58575L7.00031 4.50265C6.6815 4.18062 6.24982 4 5.80001 4H3V11.333L6.35 11.3333C6.75808 11.3333 7.15404 11.4502 7.49391 11.6654L7.5 11.6695Z" fill="#BFBFBF"/>
  </svg>
)
const downSvg=()=>(
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.00097 0H1.00097C0.573789 0 0.343335 0.501059 0.621338 0.825396L3.62134 4.3254C3.82089 4.5582 4.18105 4.5582 4.38059 4.3254L7.38059 0.825396C7.6586 0.501059 7.42814 0 7.00097 0Z" fill="black"/>
  </svg>

)
const TriangleSvg=()=>(
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895433 0.895431 0 2 0H15.743C17.5248 0 18.4171 2.15428 17.1572 3.41421L3.41421 17.1572C2.15428 18.4171 0 17.5248 0 15.743V2Z" fill="#0CCCC3"/>
  </svg>
)

const TriangleReverseSvg=()=>(
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.5713 16.5713C18.5713 17.6759 17.6759 18.5713 16.5713 18.5713L2.82829 18.5713C1.04648 18.5713 0.154144 16.417 1.41407 15.1571L15.1571 1.41407C16.417 0.154142 18.5713 1.04648 18.5713 2.82829L18.5713 16.5713Z" fill="#78E6DC"/>
  </svg>
)

// login部分
const UserInfoSvg=()=>(
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 2C6.34313 2 5 3.34314 5 4.99999C5 6.65686 6.34313 8 7.99998 8C9.65682 8 11 6.65686 11 4.99999C11 3.34314 9.65682 2 7.99998 2ZM7.99998 3C9.10453 3 9.99995 3.89542 9.99995 4.99999C9.99995 6.10458 9.10454 7 7.99998 7C6.89542 7 6 6.10458 6 4.99999C6 3.89542 6.89542 3 7.99998 3ZM12.6089 9.81789C12.0466 9.29308 11.2885 9 10.5 9H5.50001L5.35256 9.00342C4.61746 9.03754 3.91823 9.32588 3.39107 9.81789C2.82192 10.3491 2.5 11.0745 2.5 11.8333V13L2.50336 13.0583C2.53225 13.307 2.74358 13.5 3 13.5C3.27614 13.5 3.5 13.2761 3.5 13V11.8333L3.50362 11.7232C3.53248 11.2842 3.7332 10.8665 4.07339 10.5489C4.44878 10.1986 4.96245 10 5.50001 10H10.5L10.6235 10.0035C11.1157 10.0315 11.5801 10.2255 11.9266 10.5489C12.2951 10.8929 12.5 11.3545 12.5 11.8333V13L12.5034 13.0583C12.5322 13.307 12.7436 13.5 13 13.5C13.2761 13.5 13.5 13.2761 13.5 13V11.8333L13.4967 11.6998C13.4613 10.9898 13.1446 10.3179 12.6089 9.81789Z" fill="#8C8C8C"/>
  </svg>
)
const UserLockSvg=()=>(
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.4748 2.52512C9.8185 1.86875 8.92826 1.5 8 1.5C7.07175 1.5 6.18151 1.86875 5.52511 2.52512C4.86874 3.18151 4.5 4.07175 4.5 5V7H3.91667C2.99474 7 2.25 7.7544 2.25 8.68179V12.8182C2.25 13.7456 2.99474 14.5 3.91667 14.5H12.0833C13.0053 14.5 13.75 13.7456 13.75 12.8182V8.68179C13.75 7.7544 13.0053 7 12.0833 7H11.5V5L11.4966 4.84567C11.4582 3.97354 11.0948 3.14503 10.4748 2.52512ZM10.5 7V5C10.5 4.33696 10.2366 3.70108 9.76774 3.23223C9.29892 2.76339 8.66304 2.5 8 2.5C7.33696 2.5 6.70107 2.76339 6.23222 3.23223C5.79464 3.66981 5.53603 4.25291 5.50349 4.86779L5.5 5V7H10.5ZM3.91667 8H12.0833C12.4501 8 12.75 8.30382 12.75 8.68179V12.8182C12.75 13.1962 12.4501 13.5 12.0833 13.5H3.91667C3.54993 13.5 3.25 13.1962 3.25 12.8182V8.68179C3.25 8.30382 3.54993 8 3.91667 8Z" fill="#8C8C8C"/>
  </svg>
)
// SignIn
const UserEmailSvg=()=>(
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.8 2.75H3.2C2.26502 2.75 1.5 3.50705 1.5 4.4375V11.5625C1.5 12.4929 2.26502 13.25 3.2 13.25H12.8C13.735 13.25 14.5 12.4929 14.5 11.5625V4.4375C14.5 3.50706 13.735 2.75 12.8 2.75ZM3.2 3.75H12.8C12.9957 3.75 13.1733 3.83052 13.3006 3.95905L8 7.8305L2.69937 3.95905C2.82671 3.83052 3.00431 3.75 3.2 3.75ZM2.5 5.05179V11.5625C2.5 11.9383 2.81498 12.25 3.2 12.25H12.8C13.185 12.25 13.5 11.9383 13.5 11.5625V5.0518L8.29492 8.85374C8.13681 8.96923 7.92783 8.98078 7.75954 8.88839L7.70508 8.85374L2.5 5.05179Z" fill="#8C8C8C"/>
  </svg>
)
const SearchSvg=()=>(
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.40011 2.1001C4.47299 2.1001 2.1001 4.47299 2.1001 7.40011C2.1001 10.3272 4.47299 12.7001 7.40011 12.7001C8.68361 12.7001 9.86054 12.2438 10.7776 11.4847L13.0465 13.7537L13.0936 13.7952C13.2898 13.9478 13.5734 13.9339 13.7537 13.7537C13.9489 13.5584 13.9489 13.2418 13.7537 13.0465L11.4847 10.7776C12.2438 9.86054 12.7001 8.68361 12.7001 7.40011C12.7001 4.47299 10.3272 2.1001 7.40011 2.1001ZM10.4914 10.389C11.2397 9.61531 11.7001 8.56148 11.7001 7.40011C11.7001 5.02527 9.77492 3.1001 7.40011 3.1001C5.02527 3.1001 3.1001 5.02527 3.1001 7.40011C3.1001 9.77492 5.02527 11.7001 7.40011 11.7001C8.56148 11.7001 9.61531 11.2397 10.389 10.4914C10.4033 10.4723 10.4192 10.4539 10.4365 10.4365C10.4539 10.4192 10.4723 10.4033 10.4914 10.389Z" fill="#8C8C8C"/>
  </svg>
)
const PlusCircleSvg=()=>(
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51268 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51268 18.125 1.875 14.4873 1.875 10ZM16.875 10C16.875 6.20304 13.797 3.125 10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10ZM10 6.37502C10.3205 6.37502 10.5847 6.61629 10.6208 6.92713L10.625 7.00002V9.375H13C13.3452 9.375 13.625 9.65482 13.625 10C13.625 10.3205 13.3837 10.5847 13.0729 10.6208L13 10.625H10.625V13C10.625 13.3452 10.3452 13.625 10 13.625C9.67948 13.625 9.41531 13.3837 9.3792 13.0729L9.375 13V10.625H7.00002C6.65484 10.625 6.37502 10.3452 6.37502 10C6.37502 9.67948 6.61629 9.41531 6.92713 9.3792L7.00002 9.375H9.375V7.00002C9.375 6.65484 9.65482 6.37502 10 6.37502Z" fill="white"/>
  </svg>

)


const MessageIcon = props => <Icon component={messageSvg} {...props} />
const ReadingIcon = props => <Icon component={ReadingSvg} {...props} />
const DownIcon = props => <Icon component={downSvg} {...props} />
const TriangleIcon = props => <Icon component={TriangleSvg} {...props} />
const TriangleReverseIcon = props => <Icon component={TriangleReverseSvg} {...props} />
const UserInfoIcon = props => <Icon component={UserInfoSvg} {...props} />
const UserLockIcon = props => <Icon component={UserLockSvg} {...props} />
const UserEmailIcon = props => <Icon component={UserEmailSvg} {...props} />
const SearchIcon = props => <Icon component={SearchSvg} {...props} />
const PlusCircleIcon = props => <Icon component={PlusCircleSvg} {...props} />

export {
  MessageIcon,
  ReadingIcon,
  DownIcon,
  TriangleIcon,
  TriangleReverseIcon,
  UserInfoIcon,
  UserLockIcon,
  UserEmailIcon,
  SearchIcon,
  PlusCircleIcon
}
