interface Props {
  width?: string,
  height?: string
  color?: string
}
export function Logo ({ width, height, color }: Props) {
  return ( // 80 64
    <svg width={width || '80'} height={height || '64'} viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M56.9892 0.869252C57.5348 1.37911 57.953 1.98725 58.2433 2.69344C58.3176 2.04768 58.2036 1.43954 57.9013 0.869252C59.5054 0.829576 61.1016 0.905508 62.6898 1.09728C63.904 1.32439 65.12 1.55241 66.3382 1.78135C66.7976 2.10605 67.3296 2.25792 67.9343 2.2374C68.7303 2.58604 69.5665 2.81407 70.4426 2.92147C71.3898 3.28038 72.3778 3.58456 73.4069 3.83356C75.7592 4.61112 77.6974 5.97927 79.2215 7.93799C80.3306 10.029 80.2547 12.0812 78.9935 14.0946C78.6134 14.3227 78.2335 14.5507 77.8534 14.7787C77.2391 16.3272 76.213 17.4673 74.775 18.1991C74.1074 18.2139 73.4992 18.366 72.9508 18.6551C71.9628 18.6551 70.9746 18.6551 69.9865 18.6551C68.7358 18.3924 67.4438 18.3546 66.1101 18.5411C65.6951 18.5867 65.3912 18.7769 65.198 19.1112C64.8521 19.1137 64.586 19.2655 64.3999 19.5672C64.0098 20.1272 63.7058 20.7354 63.4879 21.3914C63.2528 25.7348 61.8085 29.6112 59.1554 33.0206C55.6267 36.2467 52.5865 39.8951 50.0344 43.9658C48.96 46.1149 48.0098 48.3192 47.1841 50.5785C46.8594 51.0379 46.7076 51.5699 46.7281 52.1746C45.7205 55.0324 45.8345 57.8449 47.0701 60.6115C47.8728 61.6018 48.8989 62.2097 50.1484 62.4357C49.2824 62.6598 48.3703 62.736 47.4122 62.6637C47.2601 62.6637 47.1082 62.6637 46.9561 62.6637C46.7826 62.4606 46.5546 62.3085 46.272 62.2077C45.6536 62.609 44.9696 62.7611 44.2198 62.6637C43.9152 62.3194 43.6491 61.9393 43.4217 61.5236C43.2988 60.3662 42.919 59.302 42.2816 58.3313C42.1045 54.8366 41.9904 51.3401 41.9396 47.8422C42.2958 46.6316 42.6378 45.4155 42.9657 44.1938C42.3188 45.1839 41.8249 46.2481 41.4835 47.3861C41.1823 48.4255 40.9924 49.4896 40.9135 50.5785C39.2838 51.6011 37.6495 52.5892 36.011 53.5428C35.7836 53.5496 35.6315 53.4356 35.5549 53.2007C36.2073 48.5506 35.0672 44.4081 32.1346 40.7734C31.6074 40.0941 30.9992 39.486 30.3104 38.9492C30.0776 39.0637 30.0395 39.2156 30.1964 39.4053C30.7308 39.9779 31.3009 40.5098 31.9065 41.0015C34.9755 45.6981 35.4316 50.6384 33.2747 55.823C32.14 57.7555 30.5817 59.2757 28.6002 60.3835C28.4424 60.5971 28.4805 60.749 28.7142 60.8395C29.1737 61.1642 29.7057 61.3161 30.3104 61.2956C31.6065 61.351 32.8987 61.465 34.1868 61.6376C34.8984 61.8032 35.5064 62.1452 36.011 62.6637C32.4287 62.9914 28.8563 62.9533 25.2938 62.5497C23.6477 61.6383 23.0015 60.2321 23.3556 58.3313C22.7067 59.366 22.4027 60.5062 22.4436 61.7516C21.7606 62.2426 21.0385 62.6225 20.2773 62.8917C9.50525 65.0162 2.93064 60.7597 0.553259 50.1224C-0.0434799 47.4835 -0.157492 44.8231 0.211223 42.1416C0.535929 41.6821 0.687793 41.1501 0.66727 40.5454C1.44939 37.478 2.77968 34.6656 4.65769 32.1085C9.2982 26.485 15.1128 22.5705 22.1015 20.3653C27.6772 19.3873 32.9976 17.639 38.0632 15.1207C39.863 14.081 41.5353 12.8649 43.0797 11.4724C45.8009 8.56004 48.6891 5.86184 51.7446 3.37751C51.9975 3.39051 52.2255 3.46644 52.4287 3.60554C52.6369 4.46291 53.017 5.22291 53.5688 5.88578C54.0087 6.26156 54.4647 6.64168 54.937 7.0259C55.1698 6.91143 55.2078 6.75956 55.051 6.56985C54.6004 6.2684 54.2584 5.88851 54.0249 5.42973C53.2295 4.1056 52.8494 2.66152 52.8847 1.09728C53.2053 0.98942 53.3574 0.761397 53.3408 0.413204C54.6303 -0.261747 55.8463 -0.109883 56.9892 0.869252Z" fill={color || 'white'} />
    </svg>

  )
}