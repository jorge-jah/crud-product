const tableData = document.getElementById("tableContent");

const btnAdd = document.getElementById('btnAdd');

const modalContent = document.getElementById('modal');

const productName = document.getElementById('productName');
const productValue = document.getElementById('productValue');
const productQuantity = document.getElementById('productQuantity');
const btnSend = document.getElementById("send");
const btnCancel = document.getElementById("cancel");

const form = document.getElementById("form");

const errorMessage = document.getElementById("errorMessage");
const deleteProduct = document.getElementById("delete");

const products = [
    {
        nome: "Produto A",
        preco: 900.00,
        quantidade: 1,
    },
    {
        nome: "Produto C",
        preco: 756.00,
        quantidade: 1,
    },
    {
        nome: "Produto F",
        preco: 756.00,
        quantidade: 1,
    }
];

function formatDataToString(value) {
    const valorFormatado = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    return valorFormatado;
};

function contentHtml(nome, preco, produtoqtde, total, id) {
    const content = (tableData.innerHTML += `
    <tr class="even:bg-[#f2f2f2] odd:bg-white">
    <td class="p-3" id="nome">${nome}</td>
    <td class="p-3" id="preco">${preco}</td>
    <td class="p-3" id="quantidade">${produtoqtde}</td>
    <td class="p-3 text-center" id="total">${total}</td>
    <td class="p-3 flex gap-2 items-center justify-center">
        <button onclick="handleEdit(${id})" class="py-1 px-2 bg-sky-500 text-white rounded-md">Editar</button>
        <button onclick="handleDelete(${id})" class="py-1 px-2 bg-red-400 text-white rounded-md" id="delete">Deletar</button>
    </td> 
    </tr>`
    );

    return content;
}

function renderDataTable() {
    tableData.innerHTML = "";
    products.map((product, index) => {
        const preco = formatDataToString(product.preco);

        const total = product.preco * product.quantidade;
        const totalFormatado = formatDataToString(total);

        const data = contentHtml(product.nome, preco, product.quantidade, totalFormatado, index);

    return data;
    });

};

function openModal() {
    modalContent.classList.remove('hidden');
    modalContent.classList.add('flex');
}

function closeModal() {
    modalContent.classList.remove('flex');
    modalContent.classList.add('hidden');
    closeErrorMessage();
    form.reset();
}

function showErrorMessage() {
    errorMessage.classList.remove('hidden');
    // errorMessage.classList.add('block');
}

function closeErrorMessage() {
    // errorMessage.classList.remove('block');
    errorMessage.classList.add('hidden');
}

function addProduct() {
    console.log(productName.value, productQuantity.value, productValue.value);
    if (productName.value && productValue.value && productQuantity.value) {
        const formatProductValue = Number(productValue.value)
        products.push(
           {
            nome: productName.value, 
            preco: formatProductValue,
            quantidade: productQuantity.value, 
           }        
           );
           // productName.value = "", 
           // productValue.value = "",
           // productQuantity.value = "",
           form.reset();
        //    closeErrorMessage();
           closeModal();
        } else {
            showErrorMessage();
            
        }

    
}

function handleEdit(id) {
    alert(products[id].nome);
}
function handleDelete(id) {
    alert(id);
}

renderDataTable();

btnAdd.addEventListener("click", openModal);

btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    addProduct();
    renderDataTable();
});

btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
    // closeErrorMessage();
});




