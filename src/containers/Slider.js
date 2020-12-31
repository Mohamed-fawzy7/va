import Slider from "../components/CounterSlider";
import { connect } from "react-redux";
import { setSlider} from "../actions/sliderActions";

const mapDispatchToProps = dispatch => {
    return {
        setSlider: (num)=>{
            dispatch(setSlider(num))
        }
    };
};

const mapStateToProps = (store) =>{
    return {
        sliderCount: store.sliderCount
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);


