import { useRouter } from 'next/router'
import config from '../../app.config'
import { camelCase, pascalCase } from '@smitch/js-lib'

import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
	EmailShareButton,
	EmailIcon,
} from 'next-share'

const Share = ({ id, data }) => {
	const { url } = config.siteMetadata
	const router = useRouter()
	const path = url + router.asPath
	const size = 46

	let hashtag = camelCase(id)
	let title = pascalCase(id)

	return (
		<>
			<p className='pt-8 pb-4 font-bold'>Share your creation!</p>
			<div className='flex justify-center gap-4'>
				<FacebookShareButton
					url={path}
					quote={data}
					hashtag={`#${hashtag}`}>
					<FacebookIcon size={size} />
				</FacebookShareButton>
				<TwitterShareButton
					url={path}
					hashtags={[hashtag, 'OpenAI']}
					title={title}>
					<TwitterIcon size={size} />
				</TwitterShareButton>
				<WhatsappShareButton
					url={path}
					title={title}
					separator=':: '>
					<WhatsappIcon size={size} />
				</WhatsappShareButton>
				<LinkedinShareButton url={path}>
					<LinkedinIcon size={size} />
				</LinkedinShareButton>
				<EmailShareButton
					url={path}
					subject={title}
					body={data}>
					<EmailIcon size={size} />
				</EmailShareButton>
			</div>
		</>
	)
}

export default Share
