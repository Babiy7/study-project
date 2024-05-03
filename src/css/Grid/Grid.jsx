import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../ReactJs/Label/Label';
import './Grid.scss';

const Grid = (props) => (
  <>
    <Label large>Grid</Label>
    <Label large align="center">Site</Label>
    <div className="site-container">
      <div className="site-item header"><Label>Header</Label></div>
      <div className="site-item sidebar"><Label>Sidebar</Label></div>
      <div className="site-item content">
        <Label>Content</Label>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis repudiandae molestiae totam repellat
        laborum provident amet doloribus ipsum earum saepe! Expedita, vitae quam distinctio perferendis
        harum, optio impedit libero minus esse aliquid magnam quia corrupti ducimus omnis nostrum, in ut
        eveniet iusto dicta eligendi alias veritatis nulla quo. Voluptatibus, minus. Aspernatur, blanditiis
        repellendus. Ipsam perspiciatis voluptatum cumque molestias, impedit autem odio maiores distinctio
        neque ea necessitatibus adipisci numquam suscipit voluptates, id beatae sit. Nostrum laboriosam
        nulla, asperiores quibusdam iusto quos vel et cumque iure maxime numquam laudantium quidem
        explicabo. Saepe, molestias enim tempore quis voluptatibus dicta esse praesentium accusamus ratione,
        id placeat commodi neque. Iure qui saepe rem. Officiis iste quas rerum quasi fugit culpa voluptas,
        aspernatur quaerat laboriosam nesciunt est, harum provident nobis perspiciatis vel, accusantium
        placeat omnis repudiandae excepturi dolorem consequatur nam. Nihil, cupiditate? Similique ex
        tempore, porro magni molestias quia molestiae laborum omnis veniam unde, nobis, nisi nam
        exercitationem aliquid aut possimus optio ea voluptatem ducimus ipsum architecto debitis. Beatae
        doloribus minima ducimus vitae qui quasi ab, repellendus esse aliquam nostrum quidem, accusantium
        natus eaque, distinctio quibusdam? Magnam ab, quisquam sunt eaque eligendi eum ducimus error amet
        maiores ea, repellendus, non hic quos nam fugit asperiores illo? Dolore et aperiam ab rem
        reprehenderit beatae. Voluptate, perferendis? Soluta architecto dolorem, omnis incidunt sint tempore
        excepturi iure voluptas accusantium pariatur cumque ab hic, asperiores eaque reiciendis in. Ut ex
        officiis suscipit quam impedit necessitatibus culpa quas iste! Voluptatum expedita iure nulla
        excepturi neque sapiente dicta perspiciatis illo! Doloribus aliquid odit molestias earum ipsum?
        Doloribus, ipsum. Non eaque perspiciatis magni laboriosam, odit est provident dolorem obcaecati
        doloremque dolor, quae voluptatibus voluptatum quidem illum molestias esse, voluptates
        reprehenderit. Nesciunt non enim ullam. Harum magni, sequi quae maxime dicta nemo delectus deleniti
        in aliquid asperiores itaque voluptatum doloremque enim repellendus. Hic ea voluptas vitae, omnis
        dolorem excepturi numquam ipsam cupiditate voluptates, iusto placeat odio assumenda neque asperiores
        nihil pariatur! Ut soluta ipsa repudiandae aut assumenda exercitationem quis laudantium in beatae
        blanditiis obcaecati doloribus porro et illo necessitatibus quia, nobis vitae nostrum reiciendis
        laborum sint. Soluta assumenda, consectetur quidem modi dolorem deleniti autem odit voluptas
        consequatur velit praesentium blanditiis alias vitae. Quae sapiente ipsa laboriosam, odit
        consequuntur sit facere officiis soluta tempore fugiat eius dolore dicta, expedita excepturi
        explicabo aut. Corporis quis dignissimos, ipsam voluptas sit vitae alias. Laboriosam enim fuga harum
        dignissimos impedit, voluptate nam tenetur asperiores, sint, similique eum atque fugiat velit dolor
        temporibus illo nulla? Expedita minima dicta illum suscipit fugit? Similique aperiam incidunt
        tempore, ipsa animi id modi sit soluta, omnis officiis ex iusto ipsum illo. Quo esse necessitatibus
        rem illo beatae veritatis dolores nostrum, odio libero! Eaque amet voluptatibus id adipisci ipsam
        vero repellat aliquam quia enim cumque. Aperiam dignissimos vitae in porro velit, qui molestias
        animi quae! Alias amet velit nam ipsam illo error tenetur nemo! Rem corporis repudiandae est
        inventore commodi sapiente aut vero, sunt magnam sit. Temporibus excepturi sint eum, libero culpa
        illo, iure optio labore et provident omnis iusto unde blanditiis, odit voluptas numquam!
      </div>
      <div className="site-item footer"><Label>Footer</Label></div>
    </div>
    <Label large align="center">List</Label>
    <div className="container">
      <div className="item item_1">
        1
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam distinctio error aliquid.
        Quaerat velit quidem eius non voluptatem ut deserunt perspiciatis maiores tempora hic nesciunt,
        reprehenderit dolore asperiores iste!
      </div>
      <div className="item item_2">2</div>
      <div className="item item_3">3</div>
      <div className="item item_4">
        4
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore, sit in vero culpa sed
        mollitia veritatis sint totam atque ducimus est, iusto obcaecati modi voluptate eius itaque deserunt
        minima!
      </div>
      <div className="item item_5">5</div>
      <div className="item item_6">6</div>
      <div className="item item_7">7</div>
      <div className="item item_8">8</div>
    </div>
  </>
);

Grid.propTypes = {};

export default Grid;
