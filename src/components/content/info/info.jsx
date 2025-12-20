import { Block } from '../../block/block.jsx';
import { Card } from '../../_ui/card/card.jsx';

export const Info = ({ title, content, images = [], reversed = false }) => {
	return (
		<Block className={`block block_html-code content_info  ${reversed ? ' -reversed' : ''}`}>
			<div className="block--content">
				{title}
				<div class="is_cascade">
					{content}

				</div>
			</div>
			{images.length > 0 && (
				<div className="block--cards">
					<div class="block--cards_container">
						{images.map((image, index) => (
							<Card key={index} image={typeof image === 'string' ? image : image.src} />
						))}
					</div>
				</div>
			)}
		</Block>
	);
};
