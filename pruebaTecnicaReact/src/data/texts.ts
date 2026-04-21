// 1. Opciones dentro de cada tarjeta
interface StepperOption {
    id: number;
    title: string;
    subtitle: string | null;
    text: string;
    img: string | null;
}

// 2. Estructura flexible para los formularios (pasos 2 y 4)
interface StepperForm {
    input_nombre?: string;
    input_celular?: string;
    input_tipodocumento?: string;
    numerodocumento?: string;
    input_email?: string;
    input_date_fechanacimiento?: string;
    titleDomicilio?: string;
    input_residencia?: string;
    input_ciudad?: string;
    input_departamento?: string;
    input_barrio?: string;
    input_operador?: string;
    input_entidad?: string;
}

// 3. Cada paso individual dentro del arreglo 'card'
interface StepperCard {
    stepper: number;
    title: string;
    text: string;
    img:string;
    options: StepperOption[] | null;
    form?: any | null;
    footer: string | null;
}

// 4. Estructura de cada objeto dentro de 'body'
interface StepperBody {
    id: number;
    title: string;
    img: string | null;
    text: string|null;
    button_next: string|null;
    button_return: string|null;
    button_end: string|null;
    card: StepperCard[];
}

// 5. Interfaz principal para el export
export interface IStepper {
    body: StepperBody[];
}

export const Stepper:IStepper ={
    body:[
        {
        id:1,
        title:"Tecnología para tu Empresa",
        img:null,
        text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature\n from 45 BC, making it over 2000 years old.",
        button_next:"Siguiente",
        button_return:"Regresar",
        button_end:"Finalizar",
        card:[
                {
                    stepper:1,
                    title:"Plan Asignado",
                    text:"Contrary to popular belief, Lorem Ipsum is not\n simply random text. It has roots in a piece of\n classical Latin literature from 45 BC, making it\n over 2000 years old.",
                    img:"/assets/paso1/shopping-bag.png",
                    options:[
                        {
                            id:1,
                            title:"28506 - Plan Conect Star EMP 35GB FIN",
                            subtitle:"incluye:",
                            text:`It is a long established fact that a reader will be distracted by the readable content of a\n page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-\nless normal distribution of letters, as opposed to using 'Content here, content here',\n making it look like readable English.`,
                            img:null
                        },
                        {
                            id:2,
                            title:"28506 - Plan Conect Star EMP 35GB FIN",
                            subtitle:"incluye:",
                            text:`It is a long established fact that a reader will be distracted by the readable content of a\n page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-\nless normal distribution of letters, as opposed to using 'Content here, content here',\n making it look like readable English.`,
                            img:null
                        },
                        {
                            id:3,
                            title:"28506 - Plan Conect Star EMP 35GB FIN",
                            subtitle:"incluye:",
                            text:`It is a long established fact that a reader will be distracted by the readable content of a\n page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-\nless normal distribution of letters, as opposed to using 'Content here, content here',\n making it look like readable English.`,
                            img:null
                        }
                    ],
                    form:null,
                    footer:null
                },
                {
                    stepper:2,
                    title:"Datos Personales",
                    text:"Contrary to popular belief, Lorem Ipsum is not\n simply random text. It has roots in a piece of\n classical Latin literature from 45 BC, making it\n over 2000 years old.",
                    options:null,
                    img:"/assets/paso2/archive.png",
                    form:{
                        input_nombre:"Nombre",
                        input_celular:"Número de Celular",
                        input_tipodocumento:"Tipo de Documento",
                        numerodocumento:"Número de Documento",
                        input_email:"Correo Electrónico Corporativo",
                        input_date_fechanacimiento:"Fecha de Nacimiento",
                        titleDomicilio:"Domicilio",
                        input_residencia:"Dirección de Residencia",
                        input_ciudad:"Ciudad / Municipio",
                        input_departamento:"Departamento",
                        input_barrio:"Barrio"

                    },
                    footer:null
                },
                {
                    stepper:3,
                    title:"¡Activa a tu familia con\n Bolívar y Claro!",
                    text:"Dependiendo del tipo de línea de tu familiar,\n elige una de las siguientes opciones.",
                    img:"/assets/paso3/check-square.png",
                    options:[
                      {
                            id:1,
                            title:"Línea Nueva",
                            subtitle:null,
                            text:`Si deseas un nuevo número y recibir una nueva Sim Card, elige esta opción.`,
                            img:"assets/paso3/hijo/ceIco-sim1.png"
                        },
                        {
                            id:2,
                            title:"28506 - Plan Conect Star EMP 35GB FIN",
                            subtitle:null,
                            text:`Si eres usuario actual de Claro (Postpago y Prepago) y quieres cambiar tu \nplan, elige esta opción.`,
                            img:"assets/paso3/hijo/Group321.png"
                        },
                        {
                            id:3,
                            title:"28506 - Plan Conect Star EMP 35GB FIN",
                            subtitle:null,
                            text:`Si eres usuario de otro operador y deseas conservar tu número, elige esta opción.\n Regresar`,
                            img:"assets/paso3/hijo/ceIco-reversa-portabilidad1.png"
                        }
                    ],
                    form:null,
                    footer:"* Enviaremos al domicilio que registraste la nueva Sim Card"
                },
                {
                    stepper:4,
                    title:"Portabilidad Claro",
                    text:"Recuerda: si eres usuario de otro operador y\n deseas portar tu número, la línea debe ser a tu\n nombre, estar al día en tus pagos y no puede\n estar suspendida",
                    options:null,
                    img:"/assets/paso4/check-square.png",
                    form:{
                        input_operador:"* Operador actual",
                        input_celular:"* Ingresa tu número de celular actual:",
                        input_entidad:"* Entidad a la que perteneces"
                    },
                    footer:null
                },
                {
                    stepper:5,
                    title:"Aceptación de Términos",
                    text:"Contrary to popular belief, Lorem Ipsum is not\n simply random text. It has roots in a piece of\n classical Latin literature from 45 BC, making it\n over 2000 years old.",
                    img:"/assets/paso5/file-text.png",
                    options:[
                        {
                            id:1,
                            title:"Lorem Ipsum is not simply",
                            subtitle:null,
                            text:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <a href="">using Lorem Ipsum</a> is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. \n
                            <b>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The <a href="">generated Lorem Ipsum</a> is therefore always free from repetition, injected humour, or non-characteristic words etc.</b>\n
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
                            
                            img:null
                        }
                    ],
                    form:{
                        input_check_one:"Autorizo el tratamiento de mis datos personales",
                        input_check_two:"Autorizo el tratamiento de mis datos personales",
                    },
                    footer:null
                },
                
            ],
        },
        {
        id:2,
        title:"Has finalizado tu proceso exitosamente",
        img:"/assets/paso6/check-circle.png",
        text:null,
        button_next:null,
        button_return:null,
        button_end:null,
        card:[
                {
                    stepper:1,
                    title:"Bienvenido a tu nuevo Servicio de Claro",
                    text:`Enviaremos a tu correo electrónico una copia del contrato que acabas\n de diligenciar y los pasos a seguir para la activación de tu plan.`,
                    options:null,
                    img:"",
                    form:{
                        button_return:"Volver a Inicio"
                    },
                    footer:null
                },
                
            ],
        }

    ]
    
}