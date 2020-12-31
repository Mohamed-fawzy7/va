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
        sliderValue: store.sliderValue
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);


