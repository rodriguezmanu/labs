import React from 'react';
import classnames from 'classnames';
import s from './styles.module.scss';

export const AnimatedLogo = () => (
  <div className={classnames(s.modusLogoSpin, s.logoSpin, s.logoBlack)}>
    <svg
      width="68"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-logo"
      viewBox="-105 -10 420 140"
    >
      <g transform="translate(-1 -1)" fill="none" fillRule="evenodd">
        <path
          className={s.rightfill}
          fill="#FFF"
          d="M153.125 106.75c0-36.243 29.381-65.625 65.625-65.625 0-14.279-2.828-27.893-7.937-40.33C155.84 4.855 112.5 50.74 112.5 106.75c0 58.681 47.57 106.25 106.25 106.25 2.099 0 4.182-.067 6.25-.187v-40.741a66.558 66.558 0 0 1-6.25.303c-36.244 0-65.625-29.382-65.625-65.625"
        />
        <path
          className={classnames(s.rightfill, s.path_top)}
          fill="#903"
          d="M148.59 122.338a72.054 72.054 0 0 1-1.715-15.588c0-37.526 28.764-68.318 65.443-71.574a99.532 99.532 0 0 0-5.634-27.699c-49.538 5.959-87.934 48.13-87.934 99.273 0 7.394.81 14.596 2.332 21.532a105.703 105.703 0 0 0 27.508-5.944"
        />
        <path
          className={classnames(s.rightfill, s.path_bottom)}
          fill="#F90"
          d="M148.589 122.334a105.737 105.737 0 0 1-27.508 5.946c9.849 44.878 49.833 78.47 97.669 78.47v-28.125c-34.342 0-63.039-24.092-70.161-56.291"
        />
        <path
          className={s.topfill}
          fill="#FFF"
          d="M177.797 47.697C174.5 80.854 146.525 106.75 112.5 106.75c-36.244 0-65.625-29.381-65.625-65.625a65.334 65.334 0 0 1 6.947-29.38A105.523 105.523 0 0 0 14.174.809C9.071 13.242 6.25 26.853 6.25 41.125c0 58.68 47.57 106.25 106.25 106.25s106.25-47.57 106.25-106.25c0-2.097-.068-4.178-.188-6.245-15.152.039-29.195 4.771-40.765 12.817"
        />
        <path
          className={classnames(s.topfill, s.path_top)}
          fill="#090"
          d="M92.541 110.17c-29.98-8.652-51.916-36.278-51.916-69.045 0-9.291 1.782-18.16 4.992-26.311a99.298 99.298 0 0 0-27.309-7.333A99.819 99.819 0 0 0 12.5 41.125c0 45.58 30.497 84.033 72.197 96.079a105.393 105.393 0 0 0 7.844-27.034"
        />
        <path
          className={classnames(s.topfill, s.path_bottom)}
          fill="#F30"
          d="M183.643 51.315C178.692 86.182 148.734 113 112.5 113a71.845 71.845 0 0 1-19.938-2.824 105.495 105.495 0 0 1-7.861 27.03 100.044 100.044 0 0 0 27.799 3.919c55.13 0 99.836-44.612 99.996-99.704a65.168 65.168 0 0 0-28.853 9.894"
        />
        <path
          className={s.leftfill}
          fill="#FFF"
          d="M48.159 9.091a71.517 71.517 0 0 0-7.534 32.034c0 3.46.253 6.859.726 10.188 18.34 11.637 30.524 32.108 30.524 55.437 0 36.243-29.381 65.625-65.625 65.625-2.109 0-4.192-.109-6.25-.303v40.741c2.069.12 4.151.187 6.25.187 58.68 0 106.25-47.569 106.25-106.25 0-43.797-26.501-81.399-64.341-97.659"
        />
        <path
          className={classnames(s.leftfill, s.path_top)}
          fill="#069"
          d="M51.287 17.447a65.418 65.418 0 0 0-4.412 23.678c0 2.219.114 4.41.33 6.572 18.68 12.98 30.92 34.582 30.92 59.053 0 39.696-32.18 71.875-71.875 71.875v28.125c55.229 0 100-44.771 100-100 0-39.026-22.359-72.827-54.963-89.303"
        />
      </g>
    </svg>

    <svg width="180" height="50" viewBox="410 0 1100 310" xmlns="https://www.w3.org/2000/svg">
      <g fill="#1B1B1B" fillRule="evenodd">
        <path d="M165.625 200a65.38 65.38 0 0 1-4.407 23.665c-32.605-16.475-54.968-50.264-54.968-89.29a99.831 99.831 0 0 1 5.81-33.651 99.265 99.265 0 0 1 27.309 7.335 71.637 71.637 0 0 0-4.994 26.316c0 24.465 12.234 46.059 30.908 59.037.217 2.168.342 4.362.342 6.588zm-20.588-89.303C177.642 127.173 200 160.974 200 200c0 55.229-44.771 100-100 100v-28.125c39.696 0 71.875-32.18 71.875-71.875 0-24.471-12.239-46.073-30.92-59.053a66.372 66.372 0 0 1-.33-6.572c0-8.35 1.567-16.332 4.412-23.678zM248.16 232.033c11.779 23.613 36.158 39.842 64.34 39.842V300c-41.142 0-76.475-24.849-91.826-60.354a105.45 105.45 0 0 0 27.486-7.613zm-6.813-42.227a65.232 65.232 0 0 1-28.84 9.887c.155-51.008 38.494-93.025 87.937-98.967 3.122 8.734 5.042 18.036 5.61 27.701-33.29 2.961-60.053 28.606-64.707 61.379zm36.044-45.226a65.177 65.177 0 0 1 28.855-9.902c-.163 55.089-44.869 99.697-99.996 99.697-1.89 0-3.767-.058-5.631-.161a105.837 105.837 0 0 0 5.444-27.969c.062 0 .124.005.187.005 36.229 0 66.184-26.81 71.141-61.67zM502.558 186.993L475.494 250h-13.318l-26.921-63.007V250h-22.338V149.904h30.214l25.776 63.294 25.919-63.294h30.071V250h-22.339v-63.007zm144.277 50.902c-10.722 10.154-23.92 15.23-39.597 15.23-15.679 0-28.878-5.076-39.597-15.23-10.722-10.155-16.082-22.785-16.082-37.895 0-15.107 5.36-27.739 16.082-37.894 10.719-10.154 23.918-15.231 39.597-15.231 15.677 0 28.875 5.077 39.597 15.231 10.719 10.155 16.082 22.787 16.082 37.894 0 15.11-5.363 27.74-16.082 37.895zm-8.041-37.821c0-9.173-3.034-16.997-9.103-23.473-6.068-6.475-13.528-9.712-22.378-9.712-8.851 0-16.309 3.237-22.376 9.712-6.07 6.476-9.103 14.3-9.103 23.473 0 9.174 3.033 16.974 9.103 23.399 6.067 6.426 13.525 9.638 22.376 9.638 8.85 0 16.31-3.212 22.378-9.638 6.069-6.425 9.103-14.225 9.103-23.399zm127.669-37.067c9.856 8.735 14.787 20.885 14.787 36.444 0 15.562-4.807 27.877-14.418 36.945-9.611 9.071-24.275 13.604-43.991 13.604H687.5V149.904h36.523c18.434 0 32.581 4.368 42.44 13.103zm-16.931 59.499c5.667-5.155 8.502-12.649 8.502-22.483 0-9.831-2.835-17.398-8.502-22.696-5.671-5.299-14.37-7.947-26.099-7.947h-12.865v60.858h14.638c10.549 0 18.655-2.577 24.326-7.732zm85.339 3.865c3.817 4.632 8.953 6.945 15.411 6.945s11.571-2.313 15.338-6.945c3.766-4.629 5.651-10.954 5.651-18.974V150h22.896v58.113c0 14.513-4.109 25.658-12.329 33.438-8.219 7.781-18.738 11.67-31.556 11.67-12.82 0-23.361-3.913-31.63-11.742-8.269-7.827-12.402-18.95-12.402-33.366V150h22.896v57.397c0 8.02 1.91 14.345 5.725 18.974zm115.391-56.835c-2.185 1.814-3.278 4.214-3.278 7.201 0 2.99 1.334 5.364 4.006 7.128 2.669 1.762 8.834 3.845 18.497 6.245 9.66 2.402 17.161 6.002 22.502 10.801 5.339 4.802 8.011 11.808 8.011 21.015 0 9.211-3.423 16.679-10.269 22.411-6.844 5.731-15.852 8.598-27.016 8.598-16.119 0-30.636-6.026-43.548-18.077l13.545-16.753c10.972 9.7 21.118 14.548 30.44 14.548 4.174 0 7.451-.903 9.83-2.717 2.379-1.812 3.569-4.263 3.569-7.348 0-3.086-1.263-5.534-3.787-7.349-2.526-1.81-7.525-3.647-15.001-5.51-11.848-2.841-20.514-6.54-25.997-11.095-5.488-4.556-8.23-11.707-8.23-21.456 0-9.747 3.471-17.268 10.413-22.558 6.942-5.29 15.608-7.936 25.999-7.936 6.795 0 13.593 1.176 20.39 3.527 6.796 2.352 12.719 5.683 17.768 9.994l-11.505 16.753c-8.837-6.76-17.965-10.141-27.382-10.141-3.786 0-6.773.907-8.957 2.719zM1075 250V150h22.32v80.115h42.63V250H1075zm165.59 0l-9.3-21.623h-41.96L1180.02 250h-23.77l43.25-100.096h21.62L1264.36 250h-23.77zm-30.21-70.311l-12.6 29.07h25.06l-12.46-29.07zm115.83 70.967h-44.06V150h39.17c6.81 0 12.69.816 17.64 2.449 4.94 1.633 8.66 3.84 11.16 6.623 4.51 5.184 6.76 11.041 6.76 17.569 0 7.873-2.54 13.728-7.63 17.568-1.73 1.346-2.93 2.184-3.6 2.52-.67.337-1.87.888-3.6 1.656 6.24 1.345 11.21 4.152 14.91 8.424 3.69 4.271 5.54 9.576 5.54 15.912 0 7.008-2.4 13.201-7.2 18.576-5.57 6.24-15.26 9.359-29.09 9.359zm-21.6-19.008h15.41c6.43 0 11.25-.793 14.47-2.377 3.22-1.583 4.83-4.701 4.83-9.359 0-4.654-1.71-7.726-5.12-9.217-3.41-1.486-8.85-2.23-16.34-2.23h-13.25v23.183zm0-40.896h10.66c6.24 0 10.87-.67 13.89-2.016 3.03-1.343 4.54-4.248 4.54-8.713 0-4.462-1.39-7.416-4.18-8.855-2.78-1.439-7.48-2.16-14.11-2.16h-10.8v21.744zm113.98-21.216c-2.18 1.814-3.27 4.214-3.27 7.201 0 2.99 1.33 5.364 4 7.128 2.67 1.762 8.84 3.845 18.5 6.245 9.66 2.402 17.16 6.002 22.5 10.801 5.34 4.802 8.01 11.808 8.01 21.015 0 9.211-3.42 16.679-10.26 22.411-6.85 5.731-15.86 8.598-27.02 8.598-16.12 0-30.64-6.026-43.55-18.077l13.54-16.753c10.98 9.7 21.12 14.548 30.45 14.548 4.17 0 7.45-.903 9.83-2.717 2.37-1.812 3.56-4.263 3.56-7.348 0-3.086-1.26-5.534-3.78-7.349-2.53-1.81-7.53-3.647-15-5.51-11.85-2.841-20.52-6.54-26-11.095-5.49-4.556-8.23-11.707-8.23-21.456 0-9.747 3.47-17.268 10.41-22.558 6.94-5.29 15.61-7.936 26-7.936 6.8 0 13.59 1.176 20.39 3.527 6.8 2.352 12.72 5.683 17.77 9.994l-11.51 16.753c-8.83-6.76-17.96-10.141-27.38-10.141-3.78 0-6.77.907-8.96 2.719z" />
      </g>
    </svg>
  </div>
);
