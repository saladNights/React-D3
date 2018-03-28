import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './MapScroller.css';
import MapScrollerSVG from './MapScrollerSVG/MapScrollerSVG';

class MapScroller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0.9 * window.innerWidth / 2,
            height: 0.9 * window.innerHeight / 2,
            scrollLength: 0
        };
    }

    componentDidMount(){
        const scrollEl = document.getElementById('container');

        this.setState({
            scrollLength: scrollEl.scrollHeight - this.state.height
        });
    }

    render(){

        return (
            <div className="map-scroller">
                <div id="sticky">
                    <MapScrollerSVG width={this.state.width} height={this.state.height} scrollLength={this.state.scrollLength}/>
                </div>
                <div id="container">
                    <div id="content">
                        <div className="panel">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend porta rhoncus. Duis consequat, nulla at auctor iaculis, quam augue semper leo, ut sodales nulla augue sed tortor. Donec lacinia at ligula vitae dapibus. Morbi turpis est, lacinia at lobortis eu, suscipit nec ante. Vivamus commodo, elit at faucibus ultrices, nunc neque rhoncus diam, et rutrum felis nisi in dui. In eros velit, convallis ac nunc in, ullamcorper porttitor mauris. Ut vitae tellus ullamcorper, fringilla nisl quis, consequat nisl. Mauris urna velit, posuere vitae libero cursus, molestie consequat lorem. Phasellus sodales libero ut porttitor bibendum. Mauris ut neque in enim fringilla aliquet et eu nulla. Ut iaculis tincidunt magna sit amet hendrerit. Ut pharetra condimentum metus, ut ultrices sapien fermentum sit amet. Proin sollicitudin velit eu felis aliquam, eget eleifend massa sagittis. Duis sodales pharetra pulvinar. Morbi maximus, tortor ut tempus porta, lorem eros finibus sapien, in vulputate ipsum odio quis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam nec arcu ac metus ornare tincidunt a sit amet nibh. Quisque vestibulum arcu et varius mollis. Nunc ultricies tincidunt porta. Aliquam ac turpis vel nunc condimentum congue. In non quam elit. Nulla id iaculis leo. Proin quis diam massa. Vestibulum condimentum feugiat eros, id mollis risus ornare eget. Aenean vulputate vitae magna vel fringilla. Vivamus blandit sem vel urna vestibulum, eu mattis dolor aliquam. In vel maximus nisl. Aenean sed lacus pharetra, elementum orci ac, dictum nisi. Vestibulum facilisis volutpat lobortis. Ut eu felis quis nisl elementum vulputate. Nam efficitur pretium est, eget elementum ligula feugiat ut. Mauris cursus luctus porta. Aliquam et rutrum arcu. Praesent at elementum justo, et iaculis libero. In hac habitasse platea dictumst. Fusce pulvinar ante ac mauris aliquam cursus id in est. Morbi vel convallis quam. Pellentesque vehicula nibh in sagittis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra odio lectus, nec pellentesque nulla accumsan sed. Maecenas congue rutrum mauris in blandit. Donec ullamcorper, elit eu congue rutrum, nibh sapien dignissim orci, non facilisis leo ante non tellus. Morbi dui neque, condimentum sed sodales eu, gravida vitae urna. Nam ultrices lectus in risus scelerisque, in vulputate urna tincidunt. Donec ultricies massa in tempus gravida. Pellentesque neque nisi, cursus a rutrum ut, iaculis et augue. Sed id lorem a mauris lacinia ornare vel sed magna. Donec vestibulum a ex et accumsan.
                                Cras in interdum urna. Quisque mollis urna sem, sed semper ante consectetur sit amet. Nullam feugiat nibh ut dui ultricies, non eleifend ex euismod. Vivamus fringilla felis nec vestibulum ullamcorper. Nullam sodales efficitur porttitor. Proin rutrum tempus dui. Maecenas convallis semper metus, ullamcorper faucibus dui gravida eget. Curabitur ac odio fermentum, maximus nunc vel, ultrices dolor. Nulla eu tempus turpis. Mauris tincidunt leo metus, eget aliquet ligula iaculis at. Mauris consectetur ornare convallis. Fusce mauris odio, sollicitudin et odio sed, mollis posuere eros. Aenean ac tempor risus. Proin sed tincidunt lorem, sit amet suscipit justo. Maecenas imperdiet purus vel malesuada pulvinar. Sed maximus, arcu in volutpat imperdiet, justo purus condimentum arcu, sit amet dignissim dolor elit vel tellus. Phasellus vehicula lacus nec leo ullamcorper feugiat. Mauris ultrices, felis quis sodales tincidunt, erat libero porta mi, aliquet consectetur leo sem id nisl. Nullam malesuada nisi quis mattis sagittis. Proin sed est ut tortor molestie pulvinar id quis elit. Nullam semper mauris ut consequat lobortis. Curabitur pellentesque, dui et rutrum mattis, velit massa scelerisque diam, quis rhoncus nisl sapien vel eros. Curabitur non ex facilisis est vulputate commodo. Vivamus in sapien maximus, porta magna quis, commodo est. Pellentesque et bibendum mauris. Sed vitae finibus mauris, sed venenatis augue. Praesent bibendum ac est ut mollis. In dapibus placerat viverra. Cras vulputate rhoncus tristique. Duis placerat rutrum ligula at tempor. Etiam sed metus vitae tortor pharetra congue. Nam in euismod eros. Fusce pellentesque mi lorem, quis malesuada leo sollicitudin vitae. Ut vel efficitur nisi, quis dignissim quam. Nunc interdum velit ante, vel mattis sem vulputate eu. Quisque pulvinar sodales consectetur. Cras tincidunt ipsum a orci suscipit lacinia. Donec tempus velit ut dictum tempus. Quisque id nulla et tortor porta posuere ut quis nulla. Vestibulum non ante eu mi interdum facilisis sed sed tortor. Aenean laoreet ligula et luctus consectetur. Integer semper id arcu id interdum. Cras sollicitudin egestas nisl, vel rutrum augue tempus ac. Morbi nec velit orci. Integer semper, elit bibendum fringilla tincidunt, odio arcu ultricies sem, bibendum dapibus dolor mi a nibh. Phasellus non ipsum non orci consequat vehicula pretium non dolor. Proin fringilla ultrices tincidunt. Duis ullamcorper justo ut fermentum vehicula. Donec quis rhoncus libero. Nam mollis facilisis velit gravida blandit. Donec luctus ultrices leo at facilisis. Suspendisse vel venenatis lectus. Morbi et sodales velit, a tincidunt nibh. Nunc ac purus a tortor commodo lobortis eu sit amet felis. Proin nec urna vel diam tempor pretium placerat cursus metus. Mauris.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapScroller;