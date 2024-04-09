import clsx from 'clsx';

export const Icons = {
  logo: (props: any) => (
    <svg
      {...props}
      class={clsx('size-4 fill-black dark:fill-white', props.class)}
      fill='none'
      height='36'
      viewBox='0 0 240 36'
      width='240'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.376 35.576C7.272 35.576 4.888 34.696 3.224 32.936C1.592 31.144 0.776 28.584 0.776 25.256V11.72C0.776 8.392 1.656 5.848 3.416 4.088C5.208 2.296 7.768 1.4 11.096 1.4H28.28C32.6 1.4 36.152 1.96 38.936 3.08C41.752 4.2 43.8 5.768 45.08 7.784C46.392 9.768 47.048 12.152 47.048 14.936C47.048 17.432 46.344 19.64 44.936 21.56C43.56 23.48 41.48 24.984 38.696 26.072C35.944 27.16 32.568 27.704 28.568 27.704H18.392V18.584H23.192C24.088 18.584 24.84 18.456 25.448 18.2C26.088 17.944 26.568 17.592 26.888 17.144C27.208 16.664 27.368 16.12 27.368 15.512C27.368 14.552 26.984 13.8 26.216 13.256C25.48 12.712 24.408 12.44 23 12.44H19.976V25.256C19.976 28.584 19.144 31.144 17.48 32.936C15.848 34.696 13.48 35.576 10.376 35.576ZM59.3304 35C56.0024 35 53.4424 34.12 51.6504 32.36C49.8904 30.568 49.0104 28.008 49.0104 24.68V11.144C49.0104 7.816 49.8264 5.272 51.4584 3.512C53.1224 1.72 55.5064 0.823999 58.6104 0.823999C61.7144 0.823999 64.0824 1.72 65.7144 3.512C67.3784 5.272 68.2104 7.816 68.2104 11.144V21.848H78.4344C80.9944 21.848 82.9464 22.424 84.2904 23.576C85.6664 24.696 86.3544 26.312 86.3544 28.424C86.3544 30.536 85.6664 32.168 84.2904 33.32C82.9464 34.44 80.9944 35 78.4344 35H59.3304ZM109.617 35.96C105.041 35.96 101.073 35.288 97.7131 33.944C94.3531 32.6 91.7771 30.664 89.9851 28.136C88.1931 25.608 87.2971 22.584 87.2971 19.064V11.24C87.2971 7.912 88.1131 5.368 89.7451 3.608C91.4091 1.816 93.7931 0.919998 96.8971 0.919998C100.001 0.919998 102.369 1.816 104.001 3.608C105.665 5.368 106.497 7.912 106.497 11.24V19.016C106.497 19.656 106.609 20.232 106.833 20.744C107.057 21.224 107.409 21.608 107.889 21.896C108.369 22.184 108.945 22.328 109.617 22.328C110.641 22.328 111.409 22.024 111.921 21.416C112.465 20.808 112.737 20.008 112.737 19.016V11.24C112.737 7.912 113.553 5.368 115.185 3.608C116.849 1.816 119.233 0.919998 122.337 0.919998C125.441 0.919998 127.809 1.816 129.441 3.608C131.105 5.368 131.937 7.912 131.937 11.24V19.064C131.937 22.584 131.041 25.608 129.249 28.136C127.457 30.664 124.881 32.6 121.521 33.944C118.161 35.288 114.193 35.96 109.617 35.96ZM143.473 35.576C141.585 35.576 139.969 35.176 138.625 34.376C137.313 33.544 136.337 32.344 135.697 30.776C135.057 29.176 134.801 27.256 134.929 25.016L135.697 13.304C135.889 10.424 136.433 8.088 137.329 6.296C138.257 4.472 139.601 3.128 141.361 2.264C143.153 1.368 145.457 0.919998 148.273 0.919998H150.817C153.793 0.919998 156.177 1.32 157.969 2.12C159.793 2.92 161.201 4.152 162.193 5.816C163.185 7.48 163.953 9.736 164.497 12.584L165.697 18.824H165.121L166.369 12.536C166.913 9.752 167.665 7.528 168.625 5.864C169.617 4.168 170.977 2.92 172.705 2.12C174.465 1.32 176.753 0.919998 179.569 0.919998H182.257C186.449 0.919998 189.521 1.912 191.473 3.896C193.425 5.848 194.561 8.984 194.881 13.304L195.745 24.968C196.001 28.36 195.361 30.984 193.825 32.84C192.289 34.664 190.033 35.576 187.057 35.576C184.145 35.576 181.905 34.728 180.337 33.032C178.801 31.336 177.953 28.824 177.793 25.496L177.025 7.784H178.321L174.913 26.312C174.369 29.352 173.281 31.64 171.649 33.176C170.017 34.712 167.857 35.48 165.169 35.48H164.785C162.065 35.48 159.889 34.728 158.257 33.224C156.625 31.72 155.505 29.432 154.897 26.36L151.297 7.832H152.689L152.017 25.448C151.889 28.776 151.105 31.304 149.665 33.032C148.257 34.728 146.193 35.576 143.473 35.576ZM219.215 35.96C215.343 35.96 211.823 35.224 208.655 33.752C205.487 32.28 202.991 30.264 201.167 27.704C199.375 25.112 198.479 22.232 198.479 19.064C198.479 15.864 199.375 12.984 201.167 10.424C202.991 7.832 205.487 5.8 208.655 4.328C211.823 2.856 215.343 2.12 219.215 2.12C223.087 2.12 226.607 2.856 229.775 4.328C232.943 5.8 235.423 7.832 237.215 10.424C239.039 12.984 239.951 15.864 239.951 19.064C239.951 22.232 239.039 25.112 237.215 27.704C235.423 30.264 232.943 32.28 229.775 33.752C226.607 35.224 223.087 35.96 219.215 35.96ZM219.215 31.976C222.415 31.976 225.263 31.432 227.759 30.344C230.255 29.224 232.207 27.688 233.615 25.736C235.023 23.784 235.727 21.56 235.727 19.064C235.727 16.568 235.023 14.344 233.615 12.392C232.207 10.408 230.255 8.872 227.759 7.784C225.263 6.664 222.431 6.104 219.263 6.104C216.031 6.104 213.167 6.664 210.671 7.784C208.175 8.872 206.223 10.408 204.815 12.392C203.407 14.344 202.703 16.568 202.703 19.064C202.703 21.56 203.407 23.784 204.815 25.736C206.223 27.688 208.175 29.224 210.671 30.344C213.167 31.432 216.015 31.976 219.215 31.976ZM213.071 27.704C211.663 27.704 210.527 27.272 209.663 26.408C208.799 25.512 208.367 24.168 208.367 22.376V16.52C208.367 14.44 208.863 12.904 209.855 11.912C210.879 10.92 212.415 10.424 214.463 10.424H222.623C225.023 10.424 226.863 10.968 228.143 12.056C229.455 13.144 230.111 14.584 230.111 16.376C230.111 17.464 229.871 18.376 229.391 19.112C228.943 19.848 228.367 20.392 227.663 20.744C226.959 21.096 226.287 21.272 225.647 21.272H225.263L227.135 20.072L228.479 21.32C229.023 21.8 229.407 22.264 229.631 22.712C229.855 23.16 229.967 23.672 229.967 24.248C229.967 25.24 229.599 26.072 228.863 26.744C228.159 27.384 227.167 27.704 225.887 27.704C224.863 27.704 223.935 27.448 223.103 26.936C222.271 26.392 221.455 25.64 220.655 24.68L217.199 20.552L217.391 19.16H219.215C219.887 19.16 220.383 19 220.703 18.68C221.023 18.36 221.183 17.96 221.183 17.48C221.183 17 221.007 16.632 220.655 16.376C220.335 16.088 219.871 15.944 219.263 15.944H217.727V22.376C217.727 24.168 217.295 25.512 216.431 26.408C215.599 27.272 214.479 27.704 213.071 27.704Z'
        fill='currentColor'
      />
    </svg>
  ),
  cart: (props: any) => (
    <svg
      fill='none'
      {...props}
      height='16'
      viewBox='0 0 15 16'
      width='15'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0.878906 13.1797V5.60645C0.878906 4.8252 1.08154 4.23438 1.48682 3.83398C1.89209 3.42871 2.49023 3.22607 3.28125 3.22607H4.32129C4.33594 2.6792 4.48486 2.17871 4.76807 1.72461C5.05615 1.27051 5.43701 0.90918 5.91064 0.640625C6.38916 0.367188 6.91895 0.230469 7.5 0.230469C8.07617 0.230469 8.60107 0.367188 9.07471 0.640625C9.55322 0.90918 9.93652 1.27051 10.2246 1.72461C10.5127 2.17871 10.6616 2.6792 10.6714 3.22607H11.7188C12.5049 3.22607 13.1006 3.42871 13.5059 3.83398C13.916 4.23438 14.1211 4.8252 14.1211 5.60645V13.1797C14.1211 13.9609 13.9258 14.5518 13.5352 14.9521C13.1445 15.3574 12.6001 15.5601 11.9019 15.5601H3.28125C2.49023 15.5601 1.89209 15.3574 1.48682 14.9521C1.08154 14.5518 0.878906 13.9609 0.878906 13.1797ZM2.32178 13.0552C2.32178 13.4116 2.40967 13.6777 2.58545 13.8535C2.76611 14.0293 3.02734 14.1172 3.36914 14.1172H11.8066C12.0557 14.1172 12.2632 14.0293 12.4292 13.8535C12.5952 13.6777 12.6782 13.4116 12.6782 13.0552V5.73096C12.6782 5.37451 12.5854 5.1084 12.3999 4.93262C12.2192 4.75684 11.9604 4.66895 11.6235 4.66895H3.36914C3.02734 4.66895 2.76611 4.75684 2.58545 4.93262C2.40967 5.1084 2.32178 5.37451 2.32178 5.73096V13.0552ZM5.72021 3.22607H9.27246C9.26758 2.90869 9.18701 2.62061 9.03076 2.36182C8.87451 2.10303 8.66211 1.89795 8.39355 1.74658C8.12988 1.59033 7.83203 1.51221 7.5 1.51221C7.16309 1.51221 6.86279 1.59033 6.59912 1.74658C6.33545 1.89795 6.12305 2.10303 5.96191 2.36182C5.80566 2.62061 5.7251 2.90869 5.72021 3.22607Z'
        fill='currentColor'
      />
    </svg>
  ),
  menu: (props: any) => (
    <svg
      fill='none'
      height='9'
      viewBox='0 0 15 9'
      width='15'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M0.644531 8.69629C0.463867 8.69629 0.310059 8.63037 0.183105 8.49854C0.0561523 8.36182 -0.00732422 8.20312 -0.00732422 8.02246C-0.00732422 7.8418 0.0561523 7.68555 0.183105 7.55371C0.310059 7.42188 0.463867 7.35596 0.644531 7.35596H14.3408C14.5264 7.35596 14.6826 7.42188 14.8096 7.55371C14.9414 7.68066 15.0073 7.83691 15.0073 8.02246C15.0073 8.20312 14.9414 8.36182 14.8096 8.49854C14.6826 8.63037 14.5264 8.69629 14.3408 8.69629H0.644531ZM0.644531 5.38574C0.463867 5.38574 0.310059 5.31982 0.183105 5.18799C0.0561523 5.05615 -0.00732422 4.90234 -0.00732422 4.72656C-0.00732422 4.54102 0.0561523 4.38232 0.183105 4.25049C0.310059 4.11377 0.463867 4.04541 0.644531 4.04541H14.3408C14.5264 4.04541 14.6826 4.11377 14.8096 4.25049C14.9414 4.38232 15.0073 4.54102 15.0073 4.72656C15.0073 4.90723 14.9414 5.06348 14.8096 5.19531C14.6826 5.32227 14.5264 5.38574 14.3408 5.38574H0.644531ZM0.644531 2.08252C0.463867 2.08252 0.310059 2.0166 0.183105 1.88477C0.0561523 1.75293 -0.00732422 1.59912 -0.00732422 1.42334C-0.00732422 1.23779 0.0561523 1.08154 0.183105 0.95459C0.310059 0.822754 0.463867 0.756836 0.644531 0.756836H14.3408C14.5264 0.756836 14.6826 0.822754 14.8096 0.95459C14.9414 1.08154 15.0073 1.23779 15.0073 1.42334C15.0073 1.604 14.9414 1.76025 14.8096 1.89209C14.6826 2.01904 14.5264 2.08252 14.3408 2.08252H0.644531Z'
        fill='currentColor'
      />
    </svg>
  ),
  close: (props: any) => (
    <svg
      fill='none'
      height='16'
      viewBox='0 0 16 16'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M15.2929 1.70711C15.6834 1.31658 15.6834 0.683417 15.2929 0.292893C14.9024 -0.0976311 14.2692 -0.0976311 13.8787 0.292893L8 6.17157L2.12132 0.292893C1.7308 -0.0976311 1.09763 -0.0976311 0.707107 0.292893C0.316582 0.683417 0.316582 1.31658 0.707107 1.70711L6.58579 7.58579L0.707107 13.4645C0.316582 13.855 0.316582 14.4882 0.707107 14.8787C1.09763 15.2692 1.7308 15.2692 2.12132 14.8787L8 9L13.8787 14.8787C14.2692 15.2692 14.9024 15.2692 15.2929 14.8787C15.6834 14.4882 15.6834 13.855 15.2929 13.4645L9.41421 7.58579L15.2929 1.70711Z'
        fill='currentColor'
      />
    </svg>
  ),
};

export default Icons;
