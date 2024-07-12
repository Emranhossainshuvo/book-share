
const Accordion = () => {
    return (
        <div className="max-w-screen-2xl my-10 mx-auto">
        <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">What is Book Swap?</div>
                <div className="collapse-content">
                    <p>Book Swap is a non-profit social book sharing platform where user&apos;s can share their old books to another readers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur soluta adipisci reprehenderit similique corrupti dignissimos. Unde libero quam minus blanditiis! Fuga sequi soluta dolor. Eligendi voluptate rerum nemo ipsum ab vel deserunt nisi? Error assumenda odio molestias delectus amet repellendus recusandae exercitationem. Labore fugit nostrum numquam? Dignissimos, accusamus hic?</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">How Book Swap works?</div>
                <div className="collapse-content">
                    <p>Book Swap let&apos;s you share your old book with name, author, description and image. If someone need the book the person can directly message to you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus amet obcaecati porro praesentium dignissimos dolorum ipsum voluptate, fugiat omnis maxime dolores molestiae at nihil in molestias, repellendus quas? Accusamus magnam, quaerat eos, itaque quia cumque iste facere repellendus dolorum nisi ex fugit dicta blanditiis, quis iure facilis ea voluptatibus.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">How Book Swap earns? </div>
                <div className="collapse-content">
                    <p>As a non-profit organization currently Book Swap has no stable income sources. Our current profit mostly comes from donation and Google traffic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas natus dolorum eveniet voluptates ut, molestias deleniti commodi ipsa numquam, repellendus tempora quaerat voluptate, cupiditate animi ipsum iusto totam delectus cum praesentium doloribus suscipit amet. Molestias illo laborum vitae facilis dolor aperiam eaque, ex repudiandae quibusdam adipisci commodi iusto nostrum.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Accordion;