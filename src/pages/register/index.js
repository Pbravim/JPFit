import { StatusBar } from 'expo-status-bar';
import { styles } from './styles'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard, Button, Modal
} from 'react-native';


import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from 'react-hook-form';
import DatePicker, {getFormatedDate} from "react-native-modern-datepicker";
import {useState} from "react";


export default function Register() {


    const { control, handleSubmit, setValue,formState: { errors } } = useForm({
        defaultValues: {}
    })

    function handleUserRegister(data) {
        console.log(data);
    }


    const today = new Date()
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD')
    const [show, setShow] = useState(false)
    const [date, setDate] = useState('2023/12/12')


    function handleCalendar(){
        setShow(!show)
    }

    function handleChange(propDate){
        const [year, month, day] = propDate.split('/')
        const formatedDate =(day+'/'+month+'/'+year)
        setDate(formatedDate);

        setValue('birthday', formatedDate);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                          accessible={false}>
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/register2.png')}
                style={styles.ImageBackground}

            >
                <View style={styles.texto}>
                    <Text style={styles.text} >Cadastre-se </Text>
                </View>

                <View style={styles.form}>

                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                        <View style={styles.infos}>
                            <Controller
                                control={control}
                                name="username"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[styles.btninput1]}
                                        placeholder="Nome"
                                        placeholderTextColor={'gray'}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="surname"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Sobrenome"
                                        placeholderTextColor={'gray'}
                                        style={styles.btninput1}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="Email"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Email"
                                        placeholderTextColor={'gray'}
                                        keyboardType='email-address'
                                        autoCapitalize='none'
                                        style={styles.btninput1}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="passoword"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Senha"
                                        placeholderTextColor={'gray'}
                                        secureTextEntry
                                        style={styles.btninput1}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="CPF"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="CPF"
                                        placeholderTextColor={'gray'}
                                        style={[styles.btninput, styles.btninput1]}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />
                        </View>

                        <View style={styles.formData}>
                            <TouchableOpacity onPress={handleCalendar}>
                            <Controller
                                control={control}
                                name="birthday"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Data de Aniversário"
                                        placeholderTextColor={'gray'}
                                        style={[styles.btninput, styles.btninput1]}
                                        value={value}
                                        editable={false}

                                    />
                                )}
                            />
                            </TouchableOpacity>

                        </View>

                        <Modal animationType='slide' visible={show}>
                            <View>
                                <DatePicker
                                    mode='calendar'
                                    minimumDate={startDate}
                                    selected={date}
                                    onDateChange={handleChange}
                                />

                                    <Text onPress={handleCalendar}>Selecionar</Text>
                            </View>
                        </Modal>

                        <View style={styles.formData}>
                            <Controller
                                control={control}
                                name="day"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Dia"
                                        placeholderTextColor={'gray'}
                                        style={styles.btninput}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="month"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Mês"
                                        placeholderTextColor={'gray'}
                                        style={[styles.btninput, styles.mes]}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="year"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Ano"
                                        placeholderTextColor={'gray'}
                                        style={styles.btninput}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />
                        </View>

                        <View style={styles.formPersonal}>
                            <Controller
                                control={control}
                                name="DDD"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="+55"
                                        placeholderTextColor={'gray'}
                                        style={[styles.btninput,]}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="number"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="(83) 99999-9999"
                                        placeholderTextColor={'gray'}
                                        style={[ styles.number]}
                                        keyboardType='numeric'
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />
                        </View>

                        <View style={styles.formAdress}>
                            <Controller
                                control={control}
                                name="cep"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="CEP"
                                        placeholderTextColor={'gray'}
                                        style={[styles.btninput, styles.adress]}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="UF"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="UF"

                                        placeholderTextColor={'gray'}
                                        style={[styles.btninput, styles.adress]}
                                        onChangeText={onChange}
                                        onBlur={onBlur} // chamado quando o Textinput é tocado
                                        value={value}
                                    />
                                )}
                            />

                            <KeyboardAvoidingView behavior='padding'>
                                <Controller
                                    control={control}
                                    name="city"
                                    render={({ field: { onChange, onBlur, value } }) => (

                                        <TextInput
                                            placeholder="Cidade"
                                            placeholderTextColor={'gray'}
                                            style={[styles.btninput, styles.adress]}
                                            onChangeText={onChange}
                                            onBlur={onBlur} // chamado quando o Textinput é tocado
                                            value={value}
                                        />
                                    )}
                                />
                            </KeyboardAvoidingView>

                        </View>

                        <View style={styles.btnbutton}>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleSubmit(handleUserRegister)}>
                                <Text
                                    style={styles.buttonText}

                                >Cadastrar</Text>
                            </TouchableOpacity>

                        </View>

                    </KeyboardAvoidingView>

                </View>

            </ImageBackground>
            <StatusBar style="auto" />
        </View>
        </TouchableWithoutFeedback>
    );
}

